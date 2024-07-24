import Pagina from "@/components/template/Pagina";

export default function Primeiro() {

  const raio = 4
  const PI = 3.14

  const titulo = <div>
    <h1>Primeiro Componente</h1>
    <h2>Assuntos importantes para o primeiro componente</h2>
  </div>

  function anoAtual() {
    return new Date().getFullYear();
  }

  return (
    <Pagina>
      <div>
        {titulo}
        <div className="flex flex-col">
          <span>{1 + 1}</span>
          <span>{Math.random()}</span>
          <span>{anoAtual()}</span>
          <span>{PI * Math.pow(raio, 2)}</span>
        </div>
      </div>
    </Pagina>
  )
}