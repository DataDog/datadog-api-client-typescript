import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Kind attributes.
 */
export class KindAttributes {
  /**
   * Short description of the kind.
   */
  "description"?: string;
  /**
   * User friendly name of the kind.
   */
  "displayName"?: string;
  /**
   * The kind name.
   */
  "name"?: string;
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
    description: {
      baseName: "description",
      type: "string",
    },
    displayName: {
      baseName: "displayName",
      type: "string",
    },
    name: {
      baseName: "name",
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
    return KindAttributes.attributeTypeMap;
  }

  public constructor() {}
}
