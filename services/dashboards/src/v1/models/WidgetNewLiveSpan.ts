import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { WidgetLiveSpanUnit } from "./WidgetLiveSpanUnit";
import { WidgetNewLiveSpanType } from "./WidgetNewLiveSpanType";

/**
 * Used for arbitrary live span times, such as 17 minutes or 6 hours.
 */
export class WidgetNewLiveSpan {
  /**
   * Whether to hide incomplete cost data in the widget.
   */
  "hideIncompleteCostData"?: boolean;
  /**
   * Type "live" denotes a live span in the new format.
   */
  "type": WidgetNewLiveSpanType;
  /**
   * Unit of the time span.
   */
  "unit": WidgetLiveSpanUnit;
  /**
   * Value of the time span.
   */
  "value": number;
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
    hideIncompleteCostData: {
      baseName: "hide_incomplete_cost_data",
      type: "boolean",
    },
    type: {
      baseName: "type",
      type: "WidgetNewLiveSpanType",
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
    return WidgetNewLiveSpan.attributeTypeMap;
  }

  public constructor() {}
}
