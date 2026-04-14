import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Custom timeframe for funnel comparison.
 */
export class FunnelComparisonCustomTimeframe {
  /**
   * Start of the custom timeframe.
   */
  "from": number;
  /**
   * End of the custom timeframe.
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
    return FunnelComparisonCustomTimeframe.attributeTypeMap;
  }

  public constructor() {}
}
