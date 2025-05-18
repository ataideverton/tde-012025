import Menu from "../menu";
import Link from "next/link";


export default function Page() {
    return (
        <div>
            <Menu />

            <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
                <div className="referencesBody">
                    <p>
                        {'REED, C. How the CIA Taught the Portuguese to Torture. Disponível em: <https://www.counterpunch.org/2004/05/21/how-the-cia-taught-the-portuguese-to-torture/>. Acesso em: 18 maio. 2025.'}
                    </p>
                    <br />
                    <p>
                        {'WHEELER, D. L. In the Service of Order: The Portuguese Political Police and the British, German and Spanish Intelligence, 19321945. Journal of Contemporary History, v. 18, n. 1, p. 1–25, 1983.'}
                    </p>
                    <br />
                    <p>
                        {'Guerra Civil de Espanha ano a ano - RTP Ensina. Disponível em: <https://ensina.rtp.pt/artigo/guerra-civil-de-espanha-ano-a-ano/>. Acesso em: 18 maio. 2025.'}
                    </p>
                    <br />
                    <p>
                        {'Salazar and the New State in the writings of Fernando Pessoa. - Free Online Library. Disponível em: <https://www.thefreelibrary.com/Salazar+and+the+New+State+in+the+writings+of+Fernando+Pessoa.-a0188159484>. Acesso em: 18 maio. 2025.'}
                    </p>
                    <br />
                    <p>
                        {'AKKA, M. et al. A Europa do pós II Guerra Mundial: O caminho da Cooperação. Disponível em: <https://www.academia.edu/download/44502365/e-dossier_IHC_nr_1.pdf#page=77>. Acesso em: 18 maio. 2025.'}
                    </p>
                    <br />
                    <p>
                        {'PINTO, A. G. O discurso da ditadura: ditadura, ordem e desordem em António de Oliveira Salazar. Repositorio-aberto.up.pt, 2019.'}
                    </p>
                    <br />
                    <p>
                        {'BIRMINGHAM, D. História Concisa de Portugal. [s.l: s.n.].'}
                    </p>
                    <br />
                    <p>
                        {'HENRIQUE, A. Breve história de Portugal. [s.l.] Editorial Presença, 1995.'}
                    </p>
                </div>
            </main>
        </div>
    );
}
