import { COLL_SYMBOL_ENUM } from "@/common/tokens";

export interface ITroveProps {
  collSymbol: COLL_SYMBOL_ENUM;
  onSuccess?: () => void;
}
