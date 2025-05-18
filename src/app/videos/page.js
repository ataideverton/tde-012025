import Menu from "../menu";


export default function Page() {
    return (
        <div>
            <Menu />

            <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
                <div className="videoBody">

                    <iframe width="760" height="515" src="https://www.youtube.com/embed/nKblbAqpNuA?si=8r8OQiq7Y0n2w6g5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>


                    <iframe width="760" height="515" src="https://www.youtube.com/embed/I-A37TCTtug?si=_78Jwm7fwehy-5F3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
            </main>
        </div>
    );
}
