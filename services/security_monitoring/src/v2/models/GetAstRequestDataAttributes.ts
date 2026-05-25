import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The attributes of the get-AST request, containing the source code to parse.
 */
export class GetAstRequestDataAttributes {
  /**
   * The base64-encoded source code to parse into an abstract syntax tree.
   */
  "code": string;
  /**
   * The encoding of the source code file (must be utf-8).
   */
  "fileEncoding": string;
  /**
   * The programming language of the source code to parse.
   */
  "language": string;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    code: {
      baseName: "code",
      type: "string",
      required: true,
    },
    fileEncoding: {
      baseName: "file_encoding",
      type: "string",
      required: true,
    },
    language: {
      baseName: "language",
      type: "string",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return GetAstRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
