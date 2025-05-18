import Menu from "../menu";
import Image from "next/image";


export default function Page() {

    return (
        <div>
            <Menu />

            <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
                <div className="booksBody">

                    <div className="bookItem">
                        <Image src="/token_1(2).png" width={500} height={500} alt="Capado livro Historia Concisa de Portugal" />
                        <p>Everton Ataide - Bacharelado em História</p>
                        <p>TDE Integrado - Primeiro Semestre de 2025</p>
                        <p>PUCPR - Campus Curitiba</p>
                    </div>
                </div>
            </main>
        </div>
    );
}
