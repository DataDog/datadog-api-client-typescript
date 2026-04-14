import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FunnelComparisonCustomTimeframe } from "./FunnelComparisonCustomTimeframe";
import { FunnelComparisonDurationType } from "./FunnelComparisonDurationType";

/**
 * Comparison time configuration for funnel widgets.
 */
export class FunnelComparisonDuration {
  /**
   * Custom timeframe for funnel comparison.
   */
  "customTimeframe"?: FunnelComparisonCustomTimeframe;
  /**
   * Type of comparison duration.
   */
  "type": FunnelComparisonDurationType;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    customTimeframe: {
      baseName: "custom_timeframe",
      type: "FunnelComparisonCustomTimeframe",
    },
    type: {
      baseName: "type",
      type: "FunnelComparisonDurationType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return FunnelComparisonDuration.attributeTypeMap;
  }

  public constructor() {}
}
