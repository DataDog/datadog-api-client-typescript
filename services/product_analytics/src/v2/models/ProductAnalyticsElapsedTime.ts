import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Elapsed time statistics (min/max/avg in milliseconds).
 */
export class ProductAnalyticsElapsedTime {
  /**
   * Average elapsed time to reach the next step, in milliseconds.
   */
  "avg": number;
  /**
   * Maximum elapsed time to reach the next step, in milliseconds.
   */
  "max": number;
  /**
   * Minimum elapsed time to reach the next step, in milliseconds.
   */
  "min": number;
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
    avg: {
      baseName: "avg",
      type: "number",
      required: true,
      format: "int64",
    },
    max: {
      baseName: "max",
      type: "number",
      required: true,
      format: "int64",
    },
    min: {
      baseName: "min",
      type: "number",
      required: true,
      format: "int64",
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
    return ProductAnalyticsElapsedTime.attributeTypeMap;
  }

  public constructor() {}
}
