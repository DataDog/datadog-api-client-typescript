import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes used to create an application Key.
 */
export class ApplicationKeyCreateAttributes {
  /**
   * Name of the application key.
   */
  "name": string;
  /**
   * Array of scopes to grant the application key.
   */
  "scopes"?: Array<string>;
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
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    scopes: {
      baseName: "scopes",
      type: "Array<string>",
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
    return ApplicationKeyCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
