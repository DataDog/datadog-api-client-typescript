import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A one-time downtime definition.
 */
export class DowntimeScheduleOneTimeCreateUpdateRequest {
  /**
   * ISO-8601 Datetime to end the downtime. Must include a UTC offset of zero. If not provided, the
   * downtime continues forever.
   */
  "end"?: Date;
  /**
   * ISO-8601 Datetime to start the downtime. Must include a UTC offset of zero. If not provided, the
   * downtime starts the moment it is created.
   */
  "start"?: Date;
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
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DowntimeScheduleOneTimeCreateUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
