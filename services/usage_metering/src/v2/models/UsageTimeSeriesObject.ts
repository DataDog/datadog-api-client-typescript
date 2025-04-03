import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Usage timeseries data.
 */
export class UsageTimeSeriesObject {
  /**
   * Datetime in ISO-8601 format, UTC. The hour for the usage.
   */
  "timestamp"?: Date;
  /**
   * Contains the number measured for the given usage_type during the hour.
   */
  "value"?: number;
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
    timestamp: {
      baseName: "timestamp",
      type: "Date",
      format: "date-time",
    },
    value: {
      baseName: "value",
      type: "number",
      format: "int64",
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
    return UsageTimeSeriesObject.attributeTypeMap;
  }

  public constructor() {}
}
