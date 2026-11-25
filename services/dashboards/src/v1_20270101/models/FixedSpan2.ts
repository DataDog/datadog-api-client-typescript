import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class FixedSpan2 {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "from": number;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "to": number;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    from: {
      baseName: "from",
      type: "number",
      required: true,
      format: "double",
    },
    to: {
      baseName: "to",
      type: "number",
      required: true,
      format: "double",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return FixedSpan2.attributeTypeMap;
  }

  public constructor() {}
}
