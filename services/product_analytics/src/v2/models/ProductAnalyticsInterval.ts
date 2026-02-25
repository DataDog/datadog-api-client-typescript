import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * An interval definition in a timeseries response.
 */
export class ProductAnalyticsInterval {
  "milliseconds"?: number;
  "startTime"?: number;
  "times"?: Array<number>;
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
