import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * An interval definition in a timeseries response.
 */
export class ProductAnalyticsInterval {
  /**
   * The duration of each time bucket in milliseconds.
   */
  "milliseconds"?: number;
  /**
   * The start of this interval as an epoch timestamp in milliseconds.
   */
  "startTime"?: number;
  /**
   * Epoch timestamps (in milliseconds) for each bucket in this interval.
   */
  "times"?: Array<number>;
  /**
   * The interval type (e.g., fixed or auto-computed bucket size).
   */
  "type"?: string;
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
    milliseconds: {
      baseName: "milliseconds",
      type: "number",
      format: "int64",
    },
    startTime: {
      baseName: "start_time",
      type: "number",
      format: "int64",
    },
    times: {
      baseName: "times",
      type: "Array<number>",
      format: "int64",
    },
    type: {
      baseName: "type",
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
    return ProductAnalyticsInterval.attributeTypeMap;
  }

  public constructor() {}
}
