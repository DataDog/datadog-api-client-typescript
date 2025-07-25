/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { Weekday } from "./Weekday";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Defines a single time restriction rule with start and end times and the applicable weekdays.
 */
export class TimeRestriction {
  /**
   * A day of the week.
   */
  "endDay"?: Weekday;
  /**
   * Specifies the ending time for this restriction.
   */
  "endTime"?: string;
  /**
   * A day of the week.
   */
  "startDay"?: Weekday;
  /**
   * Specifies the starting time for this restriction.
   */
  "startTime"?: string;

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
    endDay: {
      baseName: "end_day",
      type: "Weekday",
    },
    endTime: {
      baseName: "end_time",
      type: "string",
    },
    startDay: {
      baseName: "start_day",
      type: "Weekday",
    },
    startTime: {
      baseName: "start_time",
      type: "string",
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
    return TimeRestriction.attributeTypeMap;
  }

  public constructor() {}
}
