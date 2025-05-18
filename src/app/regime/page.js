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
                            <Image src="/bandeira.png" width={300} height={300} alt="bandeira do união nacional" />
                            <span>Bandeira do União Nacional</span>
                        </div>
                        <p>
                            Para entender o surgimento do regime de Salazar, parte do chamado Estado Novo Portugues, é importante também entender o que veio antes: Entre a proclamação da república em 1910 e o golpe militar de 1926 (Período chamado de Primeira República), Portugal teve oito presidentes,
                            inúmeras figuras políticas portuguesas foram assassinadas, o custo de vida aumentou, a moeda desvalorizou. O governo mais longo da primeira República durou pouco mais de um ano.
                        </p>
                        <br />
                        <p>
                            Só entre 1920 e 1925, Lisboa viu a explosão de mais de 300 bombas em suas ruas.
                        </p>
                        <br />
                        <p>
                            No momento do golpe militar de 26 Portugal era um país fraturado e à beira de uma guerra civil que estava em busca de uma solução para a instabilidade.
                        </p>
                        <br />
                        <div className="textImage">
                            <Image src="/regime1.jpg" width={500} height={500} alt="mocidade portuguesa" />
                            <span>Mocidade Portuguesa</span>
                        </div>

                        <p>
                            Em 1928 foi realizada uma eleição, para legitimar o poder assumido através do golpe militar de 1926, na qual o único candidato à presidência era o militar Óscar Carmona. Com Carmona no poder, começa a ser articulada uma nova constituição para reorganizar o estado portugues.
                            A constituição de 1933, que daria origem ao Estado Novo, é então aprovada por plebiscito popular, mas este é um cenário onde as abstenções e os votos em branco contaram como votos a favor, criando uma ilusão de aceitação popular que pode não ser completamente reflexiva da realidade.
                        </p>

                        <p>
                            Apesar de possuir um presidente, que era eleito por voto direto a cada sete anos, uma boa parte do poder executivo no Estado Novo era do Presidente do Conselho de Ministros, cargo ocupado por Salazar.
                            A autoridade do presidente estava em apontar quem ocuparia esta posição, ao longo dos anos, Carmona é reeleito de forma consecutiva três vezes e sempre aponta Salazar. Através disto, é criada a parceria mais emblemática da ditadura militar portuguesa.
                            A assembleia nacional tem poderes principalmente orçamentários e não age, neste momento, como um poder fundamental da república da forma que atualmente entendemos a função do poder legislativo.
                        </p>
                        <br />
                        <div className="textImage">
                            <Image src="/regime2.png" width={500} height={500} alt="nucleo apostolico" />
                            <span>Salazar e o Núcleo Apostólico</span>
                        </div>

                        <p>Já em 1933 é formada a Polícia de Vigilância e Defesa do Estado (PVDE), que em 1945 será renomeada Polícia Internacional e de Defesa do Estado (PIDE) com o papel de vigiar a população, aplicar a censura e controlar o fluxo da imigração dentro do país.
                            Os alvos desta força policial seriam então encaminhados para “centros de detenção”, onde seriam então torturados em busca de informações sobre outros elementos considerados “subversivos” na sociedade ou de forma punitiva.
                        </p>
                        <p>
                            Apesar de politicamente mais próximo dos Aliados que dos paises do Eixo, o regime de Salazar apresenta diversas similaridades com o regime nazista: O uso da propaganda, a criação de uma organização nacionalista para os jovens (Juventude Hitlerista, Mocidade Portuguesa), a criação de uma mílicia para os adultos, a Legião Portuguesa, as técnicas de repressão e o uso de campos de detenção
                        </p>
                        <p>
                            Após a guerra, o regime prometeu que novas eleições seriam realizadas em novembro de 1945. Foi criado então o <strong>M.U.D</strong> (Movimento de Unidade Democrática) para oposição aos políticos do Estado Novo (cuja eleição significaria a manutenção de Salazar no poder). O <strong>M.U.D</strong> solicita o
                            adiamento das eleições para se organizar eleitoralmente, o regime nega e então a oposição se abstem de participar nas eleições, resultando na eleição dos elementos propostos pelo Estado Novo.
                            Com a reeleição, o regime usa as listas de apoio ao M.U.D para executar centenas de prisões e demissões. Em 1948 o M.U.D foi então ilegalizado.
                        </p>
                        <br />
                    </div>
                </div>
            </main>
        </div>
    );
}
