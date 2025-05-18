'use client'

import { useState } from "react"
import Image from "next/image";
import { useRouter } from 'next/navigation'

import ReactCardFlip from "react-card-flip"

export default function Cards() {
    const [isFlippedSalazar, setIsFlippedSalazar] = useState(false)
    const [isFlippedRegime, setisFlippedRegime] = useState(false)
    const [isFlippedInternacional, setIsFlippedInternational] = useState(false)

    const router = useRouter()

    return (
        <div>
            <div className="info-cards">
                <div className="info-row">
                    <div onClick={() => router.push('/salazar')}>


                        <ReactCardFlip isFlipped={isFlippedSalazar} flipDirection="horizontal" className="image-card">
                            <div onMouseOver={() => setIsFlippedSalazar(true)}>
                                <Image src="/salazar.png" width={250} height={250} alt="Salazar Image" className="item-image" />
                            </div>

                            <div onMouseLeave={() => setIsFlippedSalazar(false)} className="item-content">
                                <button className="more-info">Saiba mais!</button>
                            </div>
                        </ReactCardFlip>
                    </div>

                    <div className="left-text">
                        <h2 className="card-title">O homem</h2>

                        <p>
                            Ditador nacionalista português de 1932 a 1968, tambem foi ministro, deputado e professor universitário
                        </p>
                        <br />
                        <p>
                            Estadista português que passou mais tempo no poder, recebeu um doutorado <i>honoris causa</i> da universidade de Oxford em 1940 e foi, durante boa parte do seu governo, elogiado na mídia internacional como o homem que tinha guiado um &#34;povo preguiçoso&#34; para um avanço econômico sem precedentes.
                            Católico devoto, promoveu uma nova aproximação entre o governo de Portugal e a igreja católica, que tinham sido afastados na Primeira Republica.
                        </p>
                        <br />
                        <p>
                            Foi figura importante no <strong>Estado Novo Português</strong> e da <strong>União Nacional</strong>
                        </p>
                    </div>
                </div>


                <div className="info-row-right">
                    <div className="info-row-right-image" onClick={() => router.push('/regime')}>
                        <ReactCardFlip isFlipped={isFlippedRegime} flipDirection="horizontal" className="image-card">
                            <div onMouseOver={() => setisFlippedRegime(true)}>
                                <Image src="/regime.png" width={250} height={250} alt="Salazar Image" className="item-image" />
                            </div>

                            <div onMouseLeave={() => setisFlippedRegime(false)} className="item-content">
                                <button className="more-info">Saiba mais!</button>
                            </div>
                        </ReactCardFlip>
                    </div>

                    <div className="right-text">
                        <h2 className="card-title">O Regime</h2>

                        <p>
                            Caracterizado por uma aparencia de democracia, com eleições acontecendo nominalmente em intervalos regulares de sete anos.
                        </p>
                        <br />
                        <p>
                            Regime possuia um forte aparelho de repressão estatal na forma de uma policia politica e uma forte censura e estado de vigilãncia
                        </p>
                        <br />
                        <p>
                            O Regime se destacou tambem pela reaproximação entre o estado Português e a igreja católica
                        </p>
                    </div>
                </div>

                <div className="info-row">
                    <div onClick={() => router.push('/politica')}>
                        <ReactCardFlip isFlipped={isFlippedInternacional} flipDirection="horizontal" className="image-card">
                            <div onMouseOver={() => setIsFlippedInternational(true)}>
                                <Image src="/salazar-isabel.png" width={250} height={250} alt="Salazar Image" className="item-image" />
                            </div>

                            <div onMouseLeave={() => setIsFlippedInternational(false)} className="item-content">
                                <button className="more-info">Saiba mais!</button>
                            </div>
                        </ReactCardFlip>
                    </div>

                    <div className="left-text">
                        <h2 className="card-title">A politica internacional</h2>

                        <p>
                            Politica internacional de neutralidade que apesar de inspiração nos regimes fascistas euruopeus, se alinha mais profundamente com a Grã-Bretanha e consequentemente com os Aliados durante a Segunda Guerrae Mundial
                        </p>
                        <br />
                        <p>
                            A neutralidade é mantida ao longo de toda a segunda guerra Mundial e é alvo de constantes elogios por parte da Grã-Bretanha e da imprensa internacional
                        </p>
                    </div>
                </div>


            </div>



        </div>

    )
}