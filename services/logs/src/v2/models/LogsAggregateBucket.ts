import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LogsAggregateBucketValue } from "./LogsAggregateBucketValue";

/**
 * A bucket values
 */
export class LogsAggregateBucket {
  /**
   * The key, value pairs for each group by
   */
  "by"?: { [key: string]: any };
  /**
   * A map of the metric name -> value for regular compute or list of values for a timeseries
   */
  "computes"?: { [key: string]: LogsAggregateBucketValue };
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
    by: {
      baseName: "by",
      type: "{ [key: string]: any; }",
    },
    computes: {
      baseName: "computes",
      type: "{ [key: string]: LogsAggregateBucketValue; }",
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
    return LogsAggregateBucket.attributeTypeMap;
  }

  public constructor() {}
}
