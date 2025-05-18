import Cards from "./cards";
import Menu from "./menu";

export default function Home() {
  return (
    <div>
      <Menu />

      <main>

        <Cards />

      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">

      </footer>
    </div>
  );
}
