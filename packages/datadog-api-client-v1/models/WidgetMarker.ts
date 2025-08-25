/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Markers allow you to add visual conditional formatting for your graphs.
 */
export class WidgetMarker {
  /**
   * Combination of:
   *   - A severity error, warning, ok, or info
   *   - A line type: dashed, solid, or bold
   * In this case of a Distribution widget, this can be set to be `x_axis_percentile`.
   */
  "displayType"?: string;
  /**
   * Label to display over the marker.
   */
  "label"?: string;
  /**
   * Timestamp for the widget.
   */
  "time"?: string;
  /**
   * Value to apply. Can be a single value y = 15 or a range of values 0 < y < 10.
   */
  "value": string;

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
    displayType: {
      baseName: "display_type",
      type: "string",
    },
    label: {
      baseName: "label",
      type: "string",
    },
    time: {
      baseName: "time",
      type: "string",
    },
    value: {
      baseName: "value",
      type: "string",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return WidgetMarker.attributeTypeMap;
  }

  public constructor() {}
}
