/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CIAppPipelinesBucketResponse } from "./CIAppPipelinesBucketResponse";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
