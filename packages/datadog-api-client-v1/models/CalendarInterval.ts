/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CalendarIntervalType } from "./CalendarIntervalType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Calendar interval definition.
 */
export class CalendarInterval {
  /**
   * Alignment of the interval. Valid values depend on the interval type. For `day`, use hours (for example, `1am`, `2pm`, or `14`). For `week`, use day names (for example, `monday`). For `month`, use day-of-month ordinals (for example, `1st`, `15th`). For `year` or `quarter`, use month names (for example, `january`).
   */
  "alignment"?: string;
  /**
   * Quantity of the interval.
   */
  "quantity"?: number;
  /**
   * Timezone for the interval.
   */
  "timezone"?: string;
  /**
   * Type of calendar interval.
   */
  "type": CalendarIntervalType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    alignment: {
      baseName: "alignment",
      type: "string",
    },
    quantity: {
      baseName: "quantity",
      type: "number",
      format: "int64",
    },
    timezone: {
      baseName: "timezone",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "CalendarIntervalType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CalendarInterval.attributeTypeMap;
  }

  public constructor() {}
}
