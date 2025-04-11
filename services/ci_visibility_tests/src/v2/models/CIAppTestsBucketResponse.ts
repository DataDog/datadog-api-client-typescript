import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CIAppAggregateBucketValue } from "./CIAppAggregateBucketValue";

/**
 * Bucket values.
 */
export class CIAppTestsBucketResponse {
  /**
   * The key-value pairs for each group-by.
   */
  "by"?: { [key: string]: any };
  /**
   * A map of the metric name to value for regular compute, or a list of values for a timeseries.
   */
  "computes"?: { [key: string]: CIAppAggregateBucketValue };
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
      type: "{ [key: string]: CIAppAggregateBucketValue; }",
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
    return CIAppTestsBucketResponse.attributeTypeMap;
  }

  public constructor() {}
}
