import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Aggregation bucket with a single key value.
 */
export class DashboardSearchAggregationBucketKey {
  /**
   * Number of results in this bucket.
   */
  "count": number;
  /**
   * Key value for this bucket.
   */
  "value": string;
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
    count: {
      baseName: "count",
      type: "number",
      required: true,
      format: "int64",
    },
    value: {
      baseName: "value",
      type: "string",
      required: true,
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
    return DashboardSearchAggregationBucketKey.attributeTypeMap;
  }

  public constructor() {}
}
