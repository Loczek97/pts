import React from 'react'
import Advantage from './Advantage'
import cash from '../../../assets/img/cash.svg'
import safety from '../../../assets/img/safety.svg'

export default function Advantages() {
    return (
        <div className='text-white my-4'>
            <h2 className='special text-4xl text-center'>Zalety przecisków: </h2>
            <div className='w-3/4 m-auto my-4 mt-6 grid grid-cols-1 md:grid-cols-2 gap-5'>
                <Advantage
                    icon={cash}
                    title={<span className='special'>Oszczędność</span>}
                    description={<span>Dzięki zastosowaniu nie niszczy się nawierzchni, dzięki czemu unika się kosztów związanych z koniecznością naprawy i rekonstrukcji drogi po wykonaniu przecisku.To przyczynia się do oszczędności w dłuższej perspektywie czasowej. </span>}
                />
                <Advantage
                    icon={safety}
                    title={<span className='special'>Bezpieczeństwo</span>}
                    description={<span>Przeciski można wykonywać bez konieczności zamykania dróg, co daje możliwość wykonywania prac nawet w ruchliwych miejscach bez konieczności zamykania ruchu, co przekłada się na mniejsze utrudnienia i oszczędność czasu.</span>}
                />
            </div>
        </div>
    )
}
