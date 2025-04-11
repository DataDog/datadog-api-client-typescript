import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TimeseriesBackgroundType } from "./TimeseriesBackgroundType";
import { WidgetAxis } from "./WidgetAxis";

/**
 * Set a timeseries on the widget background.
 */
export class TimeseriesBackground {
  /**
   * Timeseries is made using an area or bars.
   */
  "type": TimeseriesBackgroundType;
  /**
   * Axis controls for the widget.
   */
  "yaxis"?: WidgetAxis;
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
    type: {
      baseName: "type",
      type: "TimeseriesBackgroundType",
      required: true,
    },
    yaxis: {
      baseName: "yaxis",
      type: "WidgetAxis",
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
    return TimeseriesBackground.attributeTypeMap;
  }

  public constructor() {}
}
