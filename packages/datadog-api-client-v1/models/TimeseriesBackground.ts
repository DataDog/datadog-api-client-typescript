/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TimeseriesBackgroundType } from "./TimeseriesBackgroundType";
import { WidgetAxis } from "./WidgetAxis";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TimeseriesBackground.attributeTypeMap;
  }

  public constructor() {}
}
