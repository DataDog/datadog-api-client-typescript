import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Style configuration for retention curve.
 */
export class RetentionCurveStyle {
  /**
   * Color palette for the retention curve.
   */
  "palette"?: string;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    palette: {
      baseName: "palette",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RetentionCurveStyle.attributeTypeMap;
  }

  public constructor() {}
}
