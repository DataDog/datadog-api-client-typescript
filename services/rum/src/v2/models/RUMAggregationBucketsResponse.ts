import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RUMBucketResponse } from "./RUMBucketResponse";

/**
 * The query results.
 */
export class RUMAggregationBucketsResponse {
  /**
   * The list of matching buckets, one item per bucket.
   */
  "buckets"?: Array<RUMBucketResponse>;
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
    buckets: {
      baseName: "buckets",
      type: "Array<RUMBucketResponse>",
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
    return RUMAggregationBucketsResponse.attributeTypeMap;
  }

  public constructor() {}
}
