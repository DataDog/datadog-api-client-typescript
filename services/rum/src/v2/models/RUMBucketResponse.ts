import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RUMAggregateBucketValue } from "./RUMAggregateBucketValue";

/**
 * Bucket values.
 */
export class RUMBucketResponse {
  /**
   * The key-value pairs for each group-by.
   */
  "by"?: { [key: string]: string };
  /**
   * A map of the metric name to value for regular compute, or a list of values for a timeseries.
   */
  "computes"?: { [key: string]: RUMAggregateBucketValue };
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
      type: "{ [key: string]: string; }",
    },
    computes: {
      baseName: "computes",
      type: "{ [key: string]: RUMAggregateBucketValue; }",
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
    return RUMBucketResponse.attributeTypeMap;
  }

  public constructor() {}
}
