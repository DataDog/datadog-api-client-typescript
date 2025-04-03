import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A one-time downtime definition.
 */
export class DowntimeScheduleOneTimeResponse {
  /**
   * ISO-8601 Datetime to end the downtime.
   */
  "end"?: Date;
  /**
   * ISO-8601 Datetime to start the downtime.
   */
  "start": Date;
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
      required: true,
      format: "date-time",
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
    return DowntimeScheduleOneTimeResponse.attributeTypeMap;
  }

  public constructor() {}
}
