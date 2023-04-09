import React from 'react'
import img from '../../assets/img/test.jpg'
import Divider from '../Divider'
import Service from './Service'
import Advantages from './Advantages/Advantages'

export default function Content() {
  return (

    <div className='w-[90%] m-auto py-4'>
      <section id='services'>
        <Service
          text="Zajmujemy się kompleksowymi usługami robót ziemnych, które wykonywane są z wykorzystaniem minikoparki o wadze 2,5/3 ton. Nasza oferta obejmuje wykopy i przyłącza wodno-kanalizacyjne, kablowe oraz gazowe. Dodatkowo, wykonujemy korytowanie i niwelacje terenów. Nasza firma gwarantuje wysoką jakość świadczonych usług oraz profesjonalizm w podejściu do każdego zlecenia."
          img={img}
          reverse={true}
        />

        <Divider />

        <Service
          text="Specjalizujemy się w wykonywaniu przecisków pod różnego rodzaju przeszkodami naziemnymi, takimi jak drogi, chodniki, tory kolejowe oraz rzeki. Oferujemy przeciski do 20mb, dzięki którym możliwe jest przeciągnięcie rur o średnicy do 140mm, bez konieczności niszczenia nawierzchni i wstrzymywania ruchu ulicznego. Zapewniamy fachową obsługę i doradztwo przy wyborze odpowiedniej metody wykonania usługi."
          img={img}
          reverse={false}
        />

        <Divider />

        <Advantages />

        <Divider />

        <Service
          text="Oferujemy również usługę zgrzewania rur o średnicy od fi50 do fi200. Dzięki naszej usłudze możliwe jest połączenie dwóch rur o średnicy fi70 lub dwóch rur osłonowych bez konieczności stosowania tradycyjnych metod łączenia rur. Zapewniamy fachowe wykonanie usługi oraz szybki czas reakcji na zapytania i zamówienia."
          img={img}
          reverse={true}
        />

      </section>
    </div>
  )
}
