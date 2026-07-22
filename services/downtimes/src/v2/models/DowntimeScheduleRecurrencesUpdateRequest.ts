import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DowntimeScheduleRecurrenceCreateUpdateRequest } from "./DowntimeScheduleRecurrenceCreateUpdateRequest";

/**
 * A recurring downtime schedule definition.
 */
export class DowntimeScheduleRecurrencesUpdateRequest {
  /**
   * A list of downtime recurrences.
   */
  "recurrences"?: Array<DowntimeScheduleRecurrenceCreateUpdateRequest>;
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
      type: "Array<DowntimeScheduleRecurrenceCreateUpdateRequest>",
    },
    timezone: {
      baseName: "timezone",
      type: "string",
    }
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DowntimeScheduleRecurrencesUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
