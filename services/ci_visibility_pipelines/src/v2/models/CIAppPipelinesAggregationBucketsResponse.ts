import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CIAppPipelinesBucketResponse } from "./CIAppPipelinesBucketResponse";

/**
 * The query results.
 */
export class CIAppPipelinesAggregationBucketsResponse {
  /**
   * The list of matching buckets, one item per bucket.
   */
  "buckets"?: Array<CIAppPipelinesBucketResponse>;
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
      type: "Array<CIAppPipelinesBucketResponse>",
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
    return CIAppPipelinesAggregationBucketsResponse.attributeTypeMap;
  }

  public constructor() {}
}
