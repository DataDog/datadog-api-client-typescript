import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class GeomapView20270101OneOf {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "focus": string;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    focus: {
      baseName: "focus",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return GeomapView20270101OneOf.attributeTypeMap;
  }

  public constructor() {}
}
