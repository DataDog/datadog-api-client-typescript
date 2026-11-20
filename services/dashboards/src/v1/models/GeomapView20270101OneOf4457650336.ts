import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class GeomapView20270101OneOf4457650336 {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "customExtent": Array<any>;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    customExtent: {
      baseName: "custom_extent",
      type: "Array<any>",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return GeomapView20270101OneOf4457650336.attributeTypeMap;
  }

  public constructor() {}
}
