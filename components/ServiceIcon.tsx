import type { ServiceIcon as Kind } from "@/lib/services";
import { BoxIcon, ChatIcon, DocIcon, SearchIcon, StoreIcon, TruckIcon } from "@/components/Icons";

const MAP = {
  devis: DocIcon,
  conseil: ChatIcon,
  stock: BoxIcon,
  comptoir: StoreIcon,
  commande: SearchIcon,
  livraison: TruckIcon,
} as const;

export default function ServiceIcon({ kind, className }: { kind: Kind; className?: string }) {
  const Icon = MAP[kind];
  return <Icon className={className} />;
}
