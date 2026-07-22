import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DashboardLiveTimeframeType } from "./DashboardLiveTimeframeType";
import { WidgetLiveSpanUnit } from "./WidgetLiveSpanUnit";

/**
 * A live dashboard timeframe.
 */
export class DashboardLiveTimeframe {
  /**
   * Type of live timeframe.
   */
  "type": DashboardLiveTimeframeType;
  /**
   * Unit of the time span.
   */
  "unit": WidgetLiveSpanUnit;
  /**
   * Value of the live timeframe span.
   */
  "value": number;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    type: {
      baseName: "type",
      type: "DashboardLiveTimeframeType",
      required: true,
    },
    unit: {
      baseName: "unit",
      type: "WidgetLiveSpanUnit",
      required: true,
    },
    value: {
      baseName: "value",
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
    return DashboardLiveTimeframe.attributeTypeMap;
  }

  public constructor() {}
}
