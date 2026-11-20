/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CalendarIntervalWeekType } from "./CalendarIntervalWeekType";
import { Day } from "./Day";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class CalendarIntervalWeek {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "alignment"?: Day;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "quantity"?: number;
  /**
   * IANA time zone identifier, for example America/New_York.
   */
  "timezone"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": CalendarIntervalWeekType;

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
      type: "Day",
    },
    quantity: {
      baseName: "quantity",
      type: "number",
      format: "double",
    },
    timezone: {
      baseName: "timezone",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "CalendarIntervalWeekType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CalendarIntervalWeek.attributeTypeMap;
  }

  public constructor() {}
}
