import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The definition of Entity V3 Metadata Links Items object.
 */
export class EntityV3MetadataLinksItems {
  /**
   * Link name.
   */
  "name": string;
  /**
   * Link provider.
   */
  "provider"?: string;
  /**
   * Link type.
   */
  "type": string;
  /**
   * Link URL.
   */
  "url": string;
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
    provider: {
      baseName: "provider",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "string",
      required: true,
    },
    url: {
      baseName: "url",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return EntityV3MetadataLinksItems.attributeTypeMap;
  }

  public constructor() {}
}
