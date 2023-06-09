/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DowntimeAttributeScheduleRecurrenceCreateEditRequest } from "./DowntimeAttributeScheduleRecurrenceCreateEditRequest";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A recurring downtime schedule definition.
 */
export class DowntimeAttributeScheduleRecurrencesEditRequest {
  /**
   * A list of downtime recurrences.
   */
  "recurrences"?: Array<DowntimeAttributeScheduleRecurrenceCreateEditRequest>;
  /**
   * The timezone in which to schedule the downtime.
   */
  "timezone"?: string;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    recurrences: {
      baseName: "recurrences",
      type: "Array<DowntimeAttributeScheduleRecurrenceCreateEditRequest>",
    },
    timezone: {
      baseName: "timezone",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DowntimeAttributeScheduleRecurrencesEditRequest.attributeTypeMap;
  }

  public constructor() {}
}
