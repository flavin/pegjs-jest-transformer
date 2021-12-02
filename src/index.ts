import { PegJestTransformer } from "./transformer";

export default {
    createTransformer: (): PegJestTransformer => new PegJestTransformer(),
}
