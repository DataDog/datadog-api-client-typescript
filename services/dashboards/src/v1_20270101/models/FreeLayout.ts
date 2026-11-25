import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class FreeLayout {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "height"?: number;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "width"?: number;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "x": number;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "y": number;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    height: {
      baseName: "height",
      type: "number",
      format: "double",
    },
    width: {
      baseName: "width",
      type: "number",
      format: "double",
    },
    x: {
      baseName: "x",
      type: "number",
      required: true,
      format: "double",
    },
    y: {
      baseName: "y",
      type: "number",
      required: true,
      format: "double",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return FreeLayout.attributeTypeMap;
  }

  public constructor() {}
}
