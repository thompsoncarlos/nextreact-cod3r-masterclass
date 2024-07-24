import Pagina from "@/components/template/Pagina";
import { IconDashboard } from "@tabler/icons-react";

export default function Home() {
  return (
    <Pagina>
      <div className="flex flex-col justify-center items-center w-full h-96">
        <IconDashboard size={100} stroke={0.5} className="text-zinc-500"/>
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-black">Olá usuário!</h1>
          <p className="text-lg text-zinc-400">Seja bem-vindo ao sistema!</p>
        </div>
      </div>
    </Pagina>
  );
}
