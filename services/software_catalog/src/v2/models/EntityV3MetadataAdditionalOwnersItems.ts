import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The definition of Entity V3 Metadata Additional Owners Items object.
 */
export class EntityV3MetadataAdditionalOwnersItems {
  /**
   * Team name.
   */
  "name": string;
  /**
   * Team type.
   */
  "type"?: string;
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
    type: {
      baseName: "type",
      type: "string",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return EntityV3MetadataAdditionalOwnersItems.attributeTypeMap;
  }

  public constructor() {}
}
