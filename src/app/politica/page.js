import Menu from "../menu";
import Image from "next/image";

export default function Page() {
    return (
        <div>
            <Menu />

            <main>

                <div className="textBody">
                    <div>

                        <div className="textImage">
                            <Image src="/salazar-isabel.png" width={400} height={400} alt="Salazar e a rainha Elizabeth II" />
                            <p>Salazar e a Rainha Elizabeth II</p>
                        </div>
                        <p>
                            Desde antes do começo da Segunda Guerra mundial Salazar busca se afastar ideologicamente do Eixo, dizendo que o estado português é muito mais brando que o governo fascista de Mussolini, por exemplo.
                            Parte da argumentação de Salazar estava relacionada a uma grande proximidade que tinha com a igreja católica e a um repúdio declarado ao paganismo de Hitler.
                            Apesar de suas críticas a Hitler, Salazar o  chamava de gênio político e mais de uma vez declarou que a Europa tinha uma divida com ele por “fazer recuar a fronteira do comunismo”,
                            em referencia aos embates entre a alemanha nazista e a União das Repúblicas Socialistas Soviéticas.

                        </p>
                        <br />

                        <p>Para Salazar, seu estado corporativista estava mais próximo da Grã-bretanha que da Alemanha ou da Itália, simpatia que era recíproca do governo britânico e se demonstra na concessão de um grau de doutor <i>honoris causa</i> pela prestigiosa universidade de Oxford.
                            A neutralidade de Portugal foi mantida durante toda a segunda-guerra com apoio dos aliados mesmo quando esta se tornava desvantajosa para eles pois tinha o benefício de impedir uma aliança entre a Espanha e a Alemanha, o que poderia mudar o rumo da guerra.
                        </p>

                        <p>
                            Após a guerra, o regime prometeu que novas eleições seriam realizadas em novembro de 1945. Foi criado então o <strong>M.U.D</strong> (Movimento de Unidade Democrática) para oposição aos políticos do Estado Novo (cuja eleição significaria a manutenção de Salazar no poder). O <strong>M.U.D</strong> solicita o
                            adiamento das eleições para se organizar eleitoralmente, o regime nega e então a oposição se abstem de participar nas eleições, resultando na eleição dos elementos propostos pelo Estado Novo.
                            Com a reeleição, o regime usa as listas de apoio ao M.U.D para executar centenas de prisões e demissões. Em 1948 o M.U.D foi então ilegalizado.
                        </p>
                        <br />
                        <div className="textImage">
                            <Image src="/politica1.png" width={500} height={500} alt="foto autografada de mussolini" />
                            <p>Salazar e sua foto <i>autografada</i> de Mussolini</p>
                        </div>
                        <br />
                    </div>
                </div>

            </main>
            <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">

            </footer>
        </div>
    );
}
