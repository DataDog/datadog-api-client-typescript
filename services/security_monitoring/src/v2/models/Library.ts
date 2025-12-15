import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Vulnerability library.
 */
export class Library {
  /**
   * Related library or package names (such as child packages or affected binary paths).
   */
  "additionalNames"?: Array<string>;
  /**
   * Vulnerability library name.
   */
  "name": string;
  /**
   * Vulnerability library version.
   */
  "version"?: string;
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
    additionalNames: {
      baseName: "additional_names",
      type: "Array<string>",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    version: {
      baseName: "version",
      type: "string",
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
    return Library.attributeTypeMap;
  }

  public constructor() {}
}
