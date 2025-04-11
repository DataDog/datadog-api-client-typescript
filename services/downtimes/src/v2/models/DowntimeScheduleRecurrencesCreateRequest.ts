import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DowntimeScheduleRecurrenceCreateUpdateRequest } from "./DowntimeScheduleRecurrenceCreateUpdateRequest";

/**
 * A recurring downtime schedule definition.
 */
export class DowntimeScheduleRecurrencesCreateRequest {
  /**
   * A list of downtime recurrences.
   */
  "recurrences": Array<DowntimeScheduleRecurrenceCreateUpdateRequest>;
  /**
   * The timezone in which to schedule the downtime.
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
    recurrences: {
      baseName: "recurrences",
      type: "Array<DowntimeScheduleRecurrenceCreateUpdateRequest>",
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
    return DowntimeScheduleRecurrencesCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
