import { TOKEN_SYMBOL_ENUM } from "../tokens";

export interface TroveSymbol {
  troveSymbol: keyof typeof TOKEN_SYMBOL_ENUM | string;
}
