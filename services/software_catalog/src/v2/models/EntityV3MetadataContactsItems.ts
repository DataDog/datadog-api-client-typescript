import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The definition of Entity V3 Metadata Contacts Items object.
 */
export class EntityV3MetadataContactsItems {
  /**
   * Contact value.
   */
  "contact": string;
  /**
   * Contact name.
   */
  "name"?: string;
  /**
   * Contact type.
   */
  "type": string;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    contact: {
      baseName: "contact",
      type: "string",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return EntityV3MetadataContactsItems.attributeTypeMap;
  }

  public constructor() {}
}
