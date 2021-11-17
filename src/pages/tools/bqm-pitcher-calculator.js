import * as React from "react"
import Layout from "../../components/Layout/Layout";
import {Helmet} from "react-helmet";
import {useEffect, useState} from "react";

// markup
export default function BqmPitcherCalculatorPage() {
    const [ pitcherCost, setPitcherCost ] = useState(18.5);
    const [ servingSize, setServingSize ] = useState(300);
    const [ numberOfPeople, setNumberOfPeople ] = useState(5);
    const [ passPunches, setPassPunches ] = useState(0);
    const [ numberOfPitchers, setNumberOfPitchers ] = useState(0);

    useEffect(() => {
        setNumberOfPitchers(Math.ceil(numberOfPeople * servingSize / 1500));
    }, [servingSize, numberOfPeople, setNumberOfPitchers]);

    return (
        <Layout>
            <Helmet title={'Tools/BqmPitcherCalculator - Daniel Leuthold'} />
            <section className={'center'}>
                <h1>Bqm Pitcher Calculator</h1>
                <form>
                    <label>
                        <span>Pitcher Cost [CHF]</span>
                        <input value={pitcherCost} onChange={e => setPitcherCost(parseFloat(e.currentTarget.value))} type={'number'} />
                    </label>
                    <label>
                        <span>Serving Size [ml]</span>
                        <input value={servingSize} onChange={e => setServingSize(parseInt(e.currentTarget.value))} type={'number'} />
                    </label>
                    <label>
                        <span>Number Of People</span>
                        <input value={numberOfPeople} onChange={e => setNumberOfPeople(parseInt(e.currentTarget.value))} type={'number'} />
                    </label>
                    <label>
                        <span>Number Of Pitcher-Pass punches</span>
                        <input value={passPunches} onChange={e => setPassPunches(parseInt(e.currentTarget.value))} type={'number'} />
                    </label>
                </form>
                <div className={'results'}>
                    <div className={'result'}>
                        <span className={'label'}>Number Of Pitchers</span>
                        <span className={'value'}>{numberOfPitchers} Pitcher{numberOfPitchers > 1 ? 's' : ''}</span>
                    </div>
                    <div className={'result'}>
                        <span className={'label'}>Excess Beer</span>
                        <span className={'value'}>{numberOfPitchers * 1500 - servingSize * numberOfPeople}ml / {(numberOfPitchers * 1500 - servingSize * numberOfPeople) / servingSize} Serving{((numberOfPitchers * 1500 - servingSize * numberOfPeople) / servingSize) > 1 ? 's' : ''}</span>
                    </div>
                    <div className={'result'}>
                        <span className={'label'}>Price</span>
                        <span className={'value'}>CHF {(numberOfPitchers * pitcherCost).toFixed(2)}</span>
                    </div>
                    <div className={'result'}>
                        <span className={'label'}>Rounds until free pitcher</span>
                        <span className={'value'}>{Math.ceil((11-passPunches) / numberOfPitchers)} Rounds / {(11-passPunches)} Pitcher{11-passPunches > 1 ? 's' : ''}</span>
                    </div>
                </div>
            </section>
        </Layout>
    )
}