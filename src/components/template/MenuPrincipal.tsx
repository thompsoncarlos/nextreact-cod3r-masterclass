import MenuItem from "./MenuItem";
import { IconApps, IconHexagonNumber1, IconLayout } from "@tabler/icons-react";

export default function MenuPrincipal() {
    return (
    <aside className="w-80 bg-zinc-900">
      <nav className="flex flex-col p-5">
        <MenuItem link='/primeiro'>
          <IconHexagonNumber1 />
          <span>Primeiro Componente</span>
        </MenuItem>
        <MenuItem link='/flexbox'>
          <IconLayout />
          <span>Flexbox</span>
        </MenuItem>
        <MenuItem link='/pagina'>
          <IconApps />
          <span>Componente Página</span>
        </MenuItem>
      </nav>
    </aside>
  )
}