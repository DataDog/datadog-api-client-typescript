/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { WidgetLiveSpanUnit } from "./WidgetLiveSpanUnit";
import { WidgetNewLiveSpanType } from "./WidgetNewLiveSpanType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Used for arbitrary live span times, such as 17 minutes or 6 hours.
 */
export class WidgetNewLiveSpan {
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
      type: "any",
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
