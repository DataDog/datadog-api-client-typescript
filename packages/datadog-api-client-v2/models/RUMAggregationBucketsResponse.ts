/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RUMBucketResponse } from "./RUMBucketResponse";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The query results.
 */
export class RUMAggregationBucketsResponse {
  /**
   * The list of matching buckets, one item per bucket.
   */
  "buckets"?: Array<RUMBucketResponse>;

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
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RUMAggregationBucketsResponse.attributeTypeMap;
  }

  public constructor() {}
}
