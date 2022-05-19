import * as React from "react"
import '../../styles/pages/games/tic-tac-toe.scss';
import Layout from "../../components/Layout/Layout";
import {Helmet} from "react-helmet";
import {useEffect, useState} from "react";
import {atom, RecoilRoot, useRecoilState} from 'recoil';

const turnState = atom({
    key: 'turnState',
    default: 'X',
})

const gameOverState = atom({
    key: 'gameOverState',
    default: false,
});

const winnerState = atom({
    key: 'winnerState',
    default: '',
});

// markup
export default function TicTacToePage() {
    return (
        <RecoilRoot>
            <Layout>
                <Helmet title={'Games/TicTacToe - Daniel Leuthold'}/>
                <section className={'center'}>
                    <h1>Tic Tac Toe</h1>
                    <TicTacToe/>
                </section>
            </Layout>
        </RecoilRoot>
    )
}

function TicTacToe() {
    const [size, setSize] = useState(3);
    const [fields, setFields] = useState([]);
    const [turn, setTurn] = useRecoilState(turnState);
    const [gameOver, setGameOver] = useRecoilState(gameOverState);
    const [winner, setWinner] = useRecoilState(winnerState);

    useEffect(() => {
        if (!isNaN(size) && size >= 2 && size < 7) {
            reset(false);
        }
    }, [size]);

    const reset = (swapTurn = true) => {
        console.log('RESET');
        //if (swapTurn) setTurn(turn === 'X' ? 'O' : 'X');
        initFields();
        setGameOver(false);
        setWinner('');
    };

    const initFields = () => {
        console.log('Init Fields');
        // Rebuild Fields
        const _fields = [];
        for (let y = 0; y < size; y++) {
            const _row = [];
            for (let x = 0; x < size; x++) {
                _row.push({
                    x,
                    y,
                    state: '',
                    isWinningField: false,
                });
            }
            _fields.push(_row);
        }
        //console.log(_fields);
        setFields(_fields);
    };

    const checkWin = () => {
        const _fields = [...fields];
        let _win = false;
        let _state = '';
        let winningFields = [];

        //console.log(_fields[0][0]);


        if (_fields[0][0].state !== '') { // Check first diagonal
            //console.log('Checking first diagonal');
            let __win = true;
            _state = _fields[0][0].state;
            for (let i = 0; i < size; i++) {
                if (_fields[i][i].state !== _state) {
                    __win = false;
                    break;
                } else {
                    winningFields.push(_fields[i][i]);
                }
            }
            _win = __win;
        }

        if (!_win && _fields[0][size - 1].state !== '') { // Check second diagonal
            winningFields = [];
            //console.log('Checking second diagonal');
            let __win = true;
            _state = _fields[0][size - 1].state;
            for (let i = 0; i < size; i++) {
                if (_fields[i][size - 1 - i].state !== _state) {
                    __win = false;
                    break;
                } else {
                    winningFields.push(_fields[i][size - 1 - i]);
                }
            }
            _win = __win;
        }

        if (!_win) { // Check horizontal and vertical lines
            //console.log('Checking lines');
            for (let i = 0; i < size * 2; i++) {
                winningFields = [];
                const y = i < size ? i : 0;
                const x = i < size ? 0 : i - size;
                if (_fields[y][x].state !== '') {
                    let __win = true;
                    const __state = _fields[y][x].state;
                    winningFields.push(_fields[y][x]);
                    if (i < size) {
                        //console.log(`Checking hor x: ${x} y: ${y}`);
                        for (let j = 1; j < size; j++) {
                            if (_fields[y][j].state !== __state) {
                                __win = false;
                                break;
                            } else {
                                winningFields.push(_fields[y][j]);
                            }
                        }
                    } else {
                        //console.log(`Checking ver x: ${x} y: ${y}`);
                        for (let j = 1; j < size; j++) {
                            if (_fields[j][x].state !== __state) {
                                __win = false;
                                break;
                            } else {
                                winningFields.push(_fields[j][x]);
                            }
                        }
                    }
                    if (__win) {
                        _win = __win;
                        _state = __state;
                        break;
                    }
                }
            }
        }

        if (_win) {
            //console.log(`${_state} wins!`);
            winningFields.forEach(winningField => {
                _fields[winningField.y][winningField.x].isWinningField = true;
            });
            setFields(_fields);
            setWinner(_state);
            setGameOver(true);
        } else if (_fields.every(row => row.every(field => field.state !== ''))) {
            setWinner('No one');
            setGameOver(true);
        }

    };

    useEffect(() => {
        if (fields.length > 0 && !gameOver) checkWin();
    }, [fields, gameOver]);

    const updateField = (x, y, state) => {
        const _fields = [...fields];
        _fields[y][x].state = state;
        setFields(_fields);
    };

    return (
        <div className={'tic-tac-toe'}>
            {
                gameOver ? (
                    <>
                        <h2>{winner} wins!</h2>
                        <div className={'spacer-1'} />
                        <button className={'big'} onClick={() => reset(true)}>Play again</button>
                        <div className={'spacer-4'} />
                    </>
                ) : ''
            }
            {
                fields.map((row, y) => (
                    <div key={y} className={'tic-tac-toe_row'}>
                        {
                            row.map((field, x) => (
                                <Field updateField={updateField} key={x} isWinning={field.isWinningField} x={field.x} y={field.y} state={field.state}/>
                            ))
                        }
                    </div>
                ))
            }
            <span className={'tic-tac-toe_info'}>{turn}'s turn</span>
            <div className={'spacer-2'}/>
            <form>
                <label>
                    <span>Grid Size</span>
                    <input onChange={e => setSize(parseInt(e.currentTarget.value))} value={size} type={'number'} min={2}
                           max={9}/>
                </label>
            </form>
        </div>
    );
}

function Field({state, updateField, x, y, isWinning}) {
    const [gameOver, setGameOver] = useRecoilState(gameOverState);
    const [turn, setTurn] = useRecoilState(turnState);

    const tap = () => {
        if (!gameOver && state === '') {
            updateField(x, y, turn);
            setTurn(turn === 'X' ? 'O' : 'X');
        }
    };

    return (
        <div onClick={tap} className={'tic-tac-toe_field' + (isWinning ? ' isWinning' : '')}>{state}</div>
    );
}