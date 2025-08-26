/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DowntimeScheduleCurrentDowntimeResponse } from "./DowntimeScheduleCurrentDowntimeResponse";
import { DowntimeScheduleRecurrenceResponse } from "./DowntimeScheduleRecurrenceResponse";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A recurring downtime schedule definition.
 */
export class DowntimeScheduleRecurrencesResponse {
  /**
   * The most recent actual start and end dates for a recurring downtime. For a canceled downtime,
   * this is the previously occurring downtime. For active downtimes, this is the ongoing downtime, and for scheduled
   * downtimes it is the upcoming downtime.
   */
  "currentDowntime"?: DowntimeScheduleCurrentDowntimeResponse;
  /**
   * A list of downtime recurrences.
   */
  "recurrences": Array<DowntimeScheduleRecurrenceResponse>;
  /**
   * The timezone in which to schedule the downtime. This affects recurring start and end dates.
   * Must match `display_timezone`.
   */
  "timezone"?: string;

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
    currentDowntime: {
      baseName: "current_downtime",
      type: "DowntimeScheduleCurrentDowntimeResponse",
    },
    recurrences: {
      baseName: "recurrences",
      type: "Array<DowntimeScheduleRecurrenceResponse>",
      required: true,
    },
    timezone: {
      baseName: "timezone",
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
    return DowntimeScheduleRecurrencesResponse.attributeTypeMap;
  }

  public constructor() {}
}
