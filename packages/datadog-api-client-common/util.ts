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
