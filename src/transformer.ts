import type { SyncTransformer, TransformOptions } from "@jest/transform";
import * as crypto from "crypto";
import * as peg from "pegjs";

export class PegJestTransformer implements SyncTransformer {
  getCacheKey(
    fileContent: string,
    filePath: string,
    transformOptions: TransformOptions
  ) {
    return crypto
      .createHash("md5")
      .update(fileContent)
      .update(transformOptions.configString)
      .digest("hex");
  }

  process(
    fileContent: string,
    filePath: string,
    transformOptions: TransformOptions
  ) {
    return {
      code: `module.exports = ${peg.generate(fileContent, {
        output: "source",
      })}`,
    };
  }
}
