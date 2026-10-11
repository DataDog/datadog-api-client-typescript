/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { WidgetCalendarAlignedSpanType } from "./WidgetCalendarAlignedSpanType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Used for calendar-aligned time spans, such as the current month or previous year.
 */
export class WidgetCalendarAlignedSpan {
  /**
   * Whether to hide incomplete cost data in the widget.
   */
  "hideIncompleteCostData"?: boolean;
  /**
   * Number of completed periods before the current period. 0 represents the current period.
   */
  "offset": number;
  /**
   * Time zone used to align the calendar period.
   */
  "timezone"?: string;
  /**
   * Calendar-aligned time span type.
   */
  "type": WidgetCalendarAlignedSpanType;

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
    offset: {
      baseName: "offset",
      type: "number",
      required: true,
      format: "int64",
    },
    timezone: {
      baseName: "timezone",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "WidgetCalendarAlignedSpanType",
      required: true,
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
    return WidgetCalendarAlignedSpan.attributeTypeMap;
  }

  public constructor() {}
}
