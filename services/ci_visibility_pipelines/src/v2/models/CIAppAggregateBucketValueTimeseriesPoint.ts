import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A timeseries point.
 */
export class CIAppAggregateBucketValueTimeseriesPoint {
  /**
   * The time value for this point.
   */
  "time"?: Date;
  /**
   * The value for this point.
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
    time: {
      baseName: "time",
      type: "Date",
      format: "date-time",
    },
    value: {
      baseName: "value",
      type: "number",
      format: "double",
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
    return CIAppAggregateBucketValueTimeseriesPoint.attributeTypeMap;
  }

  public constructor() {}
}
