import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The definition of `ScaRequestDataAttributesFilesItems` object.
 */
export class ScaRequestDataAttributesFilesItems {
  /**
   * The `items` `name`.
   */
  "name"?: string;
  /**
   * The `items` `purl`.
   */
  "purl"?: string;
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
    },
    purl: {
      baseName: "purl",
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
    return ScaRequestDataAttributesFilesItems.attributeTypeMap;
  }

  public constructor() {}
}
