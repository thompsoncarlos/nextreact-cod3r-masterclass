import Caixa from "../Caixa";
import Cabecalho from "./Cabecalho";
import MenuPrincipal from "./MenuPrincipal";

export default function Pagina(props: any) {
  return (
    <div className="flex flex-col h-screen">
      <Cabecalho />
      <div className="flex flex-grow">
        <MenuPrincipal />
        <main className="flex-1 p-7">
          {props.children}
        </main>
      </div>
    </div>
  );
}