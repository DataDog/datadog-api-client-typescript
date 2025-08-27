import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { WidgetLiveSpan } from "./WidgetLiveSpan";

/**
 * Wrapper for live span
 */
export class WidgetLegacyLiveSpan {
  /**
   * Whether to hide incomplete cost data in the widget.
   */
  "hideIncompleteCostData"?: boolean;
  /**
   * The available timeframes depend on the widget you are using.
   */
  "liveSpan"?: WidgetLiveSpan;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    hideIncompleteCostData: {
      baseName: "hide_incomplete_cost_data",
      type: "boolean",
    },
    liveSpan: {
      baseName: "live_span",
      type: "WidgetLiveSpan",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return WidgetLegacyLiveSpan.attributeTypeMap;
  }

  public constructor() {}
}
