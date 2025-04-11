import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The most recent actual start and end dates for a recurring downtime. For a canceled downtime,
 * this is the previously occurring downtime. For active downtimes, this is the ongoing downtime, and for scheduled
 * downtimes it is the upcoming downtime.
 */
export class DowntimeScheduleCurrentDowntimeResponse {
  /**
   * The end of the current downtime.
   */
  "end"?: Date;
  /**
   * The start of the current downtime.
   */
  "start"?: Date;
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
    end: {
      baseName: "end",
      type: "Date",
      format: "date-time",
    },
    start: {
      baseName: "start",
      type: "Date",
      format: "date-time",
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
    return DowntimeScheduleCurrentDowntimeResponse.attributeTypeMap;
  }

  public constructor() {}
}
