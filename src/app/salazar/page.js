import Menu from "../menu";
import Image from "next/image";


export default function Page() {
    return (
        <div>
            <Menu />

            <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
                <div className="textBody">
                    <div>

                        <div className="textImage">
                            <Image src="/salazar1.jpg" width={300} height={300} alt="retrato oficial em 1968" />
                            <span>Retrato Oficial em 1968</span>
                        </div>
                        <p>     Antonio de Oliveira Salazar, nascido em 28 de Abril de 1889, se formou em Direito pela universidade de Coimbra em 1914 e em 1916 torna-se professor assistente de Ciêncas Económicas, a qual assume a regencia da cadeira em 1917. </p>
                        <p>
                            Em Coimbra foi professor de Economia Política, Ciência das Finanças e Economia Social.
                            Durante seu tempo em Coimbra, tanto como estudante quanto como aluno, foi  forte critico da Primeira Republica, escrevendo artigos focados principalmente no anticlericalismo do governo, sendo católico devoto e acreditando em uma proximidade necessária entre a Igreja e o Estado.
                        </p>
                        <br />
                        <div className="textImage">
                            <Image src="/salazar2.png" width={300} height={300} alt="foto de salazar em 1925" />
                            <span>Salazar (Esquerda) em 1925</span>
                        </div>

                        <p>
                            Sua carreira politica em inicio em 1921, quando é eleito deputado pelo partido Centro Católico Português, legislatura curta, na qual visitou a Câmara dos Deputados apenas uma vez antes do corpo ser dissolvido em novembro do mesmo ano, após a dissolução, Salazar recusou se candidatar novamente.
                            Em 1926, tornou-se Ministro das Finanças a convite dos militares mas renunciou após duas semanas por não obter concessões que considerava imprescindíveis para exercer o cargo. Volta ao cargo em 1928, só o abandonando em 1932
                            para se tornar o Presidente do Conselho de Ministros, cargo que ocuparia como governante autoritário até 1968. </p>

                        <p>
                            Como ministro, criou um “milagre económico” em 1928-1929 através do congelamento de salários, aumento de impostos, congelamento de obras e geral austeridade imposta ao governo portugues.
                            Através de uma imprensa controlada pelos órgãos de censura do governo, Salazar começa a ganhar notoriedade e a reputação de um salvador da pátria, em virtude de um percebido desenvolvimento econômico e estabilização da nação.

                            Usando um slogan que hoje é familiar ao povo brasileiro de “Deus, Pátria e Família”, Salazar instrumenta uma ditadura antiliberal e anticomunista.
                            Apesar de se inspirar fortemente nos regimes nazista da Alemanha e fascista da Itália, principalmente no que se refere a propaganda interna e politicas de repressão, Salazar se opõe a organizações fascistas em Portugal, principalmente como forma de consolidar o proprio poder e impedir competição.
                        </p>
                        <br />
                        <div className="textImage">
                            <Image src="/salazar3.png" width={500} height={500} alt="primeiro governo de Salazar em 1933" />
                            <span>Primeiro governo de Salazar em 1933</span>
                        </div>

                        <p>No contexto da Guerra Civil Espanhola, que se inicia em 1936, Salazar apoia Franco imediatamente, o que lhe garante prestígio, não só com Franco mas com seus apoiadores dentro da Espanha.
                            Ccom a eventual vitória de Franco em 1939, Salazar é capaz de usar esse prestígio para articular um de seus movimentos politicos internacionais mais importantes: A criação de um Bloco Ibérico que permanecerá neutro durante a Segunda Guerra Mundial, impedindo uma provável aliança Espanha-Alemanha</p>
                        <p>Em 1937 foi alvo de um atentado contra a sua vida, com o anarquista Emídio Santana explodindo uma bomba a 3m de distância do carro de Salazar. Apesar da proximidade, Salazar sobrevive sem muitos ferimentos e usa isso como reforço na imagem messiânica que vinha construindo em seu tempo no governo Portugues, imagem reforçada por várias missas de
                            agradecimento que foram celebradas por todo o pais.
                        </p>
                        <p>
                            O atentado também serviu como forma de ilustrar a proximidade entre Salazar e Mussolini: O ditador italiano enviou membros de sua própria guarda pretoriana para participar da caçada em nível nacional do responsável pelo atentado, Hitler enviou mensagens comemorando o fato de ele ter sobrevivido. </p>
                        <br />
                        <p>
                            Com sua posição no poder consolidade e o aparato do estado de Censura e Vigilância a sua disposição, Salazar exerce seu poder como Presidente do Conselho de Ministros de forma ininterrupta durante toda a Segunda Guerra mundial e depois, só
                            sendo afastado do poder em 1968, depois de complicações médicas que começam com uma queda de uma cadeira. Seu quadro de lesões internas e aparente hemorragia não apresenta prognóstico de melhorar, finalmente acarretando em um AVC e um coma ainda no mesmo ano.

                            Dois anos depois, em 1970, morre de embolia pulmonar.
                        </p>
                        <div className="textImage">
                            <Image src="/salazar4.jpg" width={300} height={300} alt="arte de propaganda" />
                            <span>Arte de propaganda do regime de Salazar</span>
                        </div>
                    </div>
                </div>

            </main>

        </div>
    );
}
