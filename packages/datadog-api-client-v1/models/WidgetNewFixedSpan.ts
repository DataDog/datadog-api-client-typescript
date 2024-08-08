/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { WidgetNewFixedSpanType } from "./WidgetNewFixedSpanType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Used for fixed span times, such as 'March 1 to March 7'.
 */
export class WidgetNewFixedSpan {
  /**
   * Start time in seconds since epoch.
   */
  "from": number;
  /**
   * End time in seconds since epoch.
   */
  "to": number;
  /**
   * Type "fixed" denotes a fixed span.
   */
  "type": WidgetNewFixedSpanType;

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
    from: {
      baseName: "from",
      type: "number",
      required: true,
      format: "int64",
    },
    to: {
      baseName: "to",
      type: "number",
      required: true,
      format: "int64",
    },
    type: {
      baseName: "type",
      type: "WidgetNewFixedSpanType",
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
    return WidgetNewFixedSpan.attributeTypeMap;
  }

  public constructor() {}
}
