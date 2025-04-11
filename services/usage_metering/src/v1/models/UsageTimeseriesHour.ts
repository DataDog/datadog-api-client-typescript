import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The hourly usage of timeseries.
 */
export class UsageTimeseriesHour {
  /**
   * The hour for the usage.
   */
  "hour"?: Date;
  /**
   * Contains the number of custom metrics that are inputs for aggregations (metric configured is custom).
   */
  "numCustomInputTimeseries"?: number;
  /**
   * Contains the number of custom metrics that are outputs for aggregations (metric configured is custom).
   */
  "numCustomOutputTimeseries"?: number;
  /**
   * Contains sum of non-aggregation custom metrics and custom metrics that are outputs for aggregations.
   */
  "numCustomTimeseries"?: number;
  /**
   * The organization name.
   */
  "orgName"?: string;
  /**
   * The organization public ID.
   */
  "publicId"?: string;
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
    hour: {
      baseName: "hour",
      type: "Date",
      format: "date-time",
    },
    numCustomInputTimeseries: {
      baseName: "num_custom_input_timeseries",
      type: "number",
      format: "int64",
    },
    numCustomOutputTimeseries: {
      baseName: "num_custom_output_timeseries",
      type: "number",
      format: "int64",
    },
    numCustomTimeseries: {
      baseName: "num_custom_timeseries",
      type: "number",
      format: "int64",
    },
    orgName: {
      baseName: "org_name",
      type: "string",
    },
    publicId: {
      baseName: "public_id",
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
    return UsageTimeseriesHour.attributeTypeMap;
  }

  public constructor() {}
}
