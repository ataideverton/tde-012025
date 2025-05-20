import Menu from "../menu";
import Link from "next/link";


export default function Page() {
    return (
        <div>
            <Menu />

            <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
                <div className="articlesBody">
                    <div className="articlesContent">
                        <p>
                            <Link href="https://www.jstor.org/stable/260478?read-now=1&seq=6#page_scan_tab_contents">Em serviço da Ordem: A Polícia Política Portuguesa e os serviços de Inteligência da Espanha, Alemanha e Grã-Bretanha, 1932-1945 (Em inglês)</Link>
                        </p>
                        <br />
                        <p>
                            <Link href="https://ensina.rtp.pt/artigo/guerra-civil-de-espanha-ano-a-ano/">Guerra Civil da Espanha: Ano a Ano</Link>
                        </p>
                        <br />
                        <p>
                            <Link href="https://www.thefreelibrary.com/Salazar+and+the+New+State+in+the+writings+of+Fernando+Pessoa.-a0188159484"> Salazar e o Estado novo na escrita de Fernando Pessoa (Em inglês)</Link>
                        </p>
                        <br />
                        <p>
                            <Link href="https://www.counterpunch.org/2004/05/21/how-the-cia-taught-the-portuguese-to-torture/"> Como a CIA ensinou os portugueses a torturar (Em inglês)</Link>
                        </p>
                        <br />
                        <p>
                            <Link href="https://www.academia.edu/download/44502365/e-dossier_IHC_nr_1.pdf#page=77">Portugal, o Estado Novo, Antonio de Olveira Salazar e a ONU: Posicionamentos e Ilegalidades no Pós II Guerra Mundial (1944-1970)</Link>
                        </p>
                        <br />
                        <p>
                            <Link href="https://repositorio-aberto.up.pt/handle/10216/90605">O discurso da ditadura: ditadura, ordem e desordem em António de Oliveira Salazar</Link>
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}
