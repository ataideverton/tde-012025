import Menu from "../menu";
import Image from "next/image";


export default function Page() {

    return (
        <div>
            <Menu />

            <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
                <div className="booksBody">
                    <div className="bookItem">
                        <a target="_blank" href="https://www.amazon.com.br/Hist%C3%B3ria-Concisa-Portugal-David-Birmingham/dp/8572838856">
                            <Image src="/historia-concisa-portugal.jpg" width={500} height={500} alt="Capado livro Historia Concisa de Portugal" />
                            <span>História Concisa de Portugal - David Birmingham</span>

                        </a>
                    </div>

                    <div className="bookItem">
                        <a target="_blank" href="https://www.amazon.com.br/Breve-Hist%C3%B3ria-Portugal-H/dp/9722364758">
                            <div className="bookItem">
                                <Image src="/breve-historia-portugal.jpg" width={500} height={500} alt="Capado livro Breve História de Portugal" />
                                <span>Breve História de Portugal - A. H. De Oliveira Marques</span>
                            </div>
                        </a>
                    </div>

                    <div className="bookItem">
                        <a target="_blank" href="https://leituria.com/pt/os-livros/historia/historia-de-portugal-vol-7-o-estado-novo">
                            <div className="bookItem">
                                <Image src="/o-estado-novo.jpeg" width={500} height={500} alt="Capado livro História de Portugal - O estado novo" />
                                <span>História de Portugal, vol 7: O Estado Novo - José Mattoso</span>
                            </div>
                        </a>
                    </div>
                </div>
            </main>
        </div>
    );
}
