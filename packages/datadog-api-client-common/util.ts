/**
 * Returns if a specific http code is in a given code range
 * where the code range is defined as a combination of digits
 * and "X" (the letter X) with a length of 3
 *
 * @param codeRange string with length 3 consisting of digits and "X" (the letter X)
 * @param code the http status code to be checked against the code range
 */
export function isCodeInRange(codeRange: string, code: number): boolean {
  // This is how the default value is encoded in OAG
  if (codeRange === "0") {
    return true;
  }
  if (codeRange == code.toString()) {
    return true;
  } else {
    const codeString = code.toString();
    if (codeString.length != codeRange.length) {
      return false;
    }
    for (let i = 0; i < codeString.length; i++) {
      if (
        codeRange.charAt(i) != "X" &&
        codeRange.charAt(i) != codeString.charAt(i)
      ) {
        return false;
      }
    }
    return true;
  }
}

export class UnparsedObject {
  unparsedObject: any;
  constructor(data: any) {
    this.unparsedObject = data;
  }
}

export type AttributeTypeMap = {
  [key: string]: {
    baseName: string;
    type: string;
    required?: boolean;
    format?: string;
  };
};

export async function compressZstd(body: string): Promise<ArrayBuffer> {
  return await new Promise((resolve) => {
    let zstdLib;
    try {
      zstdLib = require("zstd-codec");
    } catch (error) {
      throw new Error("zstd-codec package is missing");
    }

    zstdLib.ZstdCodec.run((zstd: any) => {
      const simple = new zstd.Simple();
      resolve(simple.compress(Buffer.from(body, "utf8")).buffer);
    });
  });
}
