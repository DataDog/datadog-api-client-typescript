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

export const isBrowser: boolean =
  typeof window !== "undefined" && typeof window.document !== "undefined";

export const isNode: boolean =
  typeof process !== "undefined" && process.release.name === "node";
