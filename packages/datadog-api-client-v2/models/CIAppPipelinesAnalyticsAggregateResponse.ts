/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CIAppPipelinesAggregationBucketsResponse } from "./CIAppPipelinesAggregationBucketsResponse";
import { CIAppResponseLinks } from "./CIAppResponseLinks";
import { CIAppResponseMetadata } from "./CIAppResponseMetadata";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The response object for the pipeline events aggregate API endpoint.
 */
export class CIAppPipelinesAnalyticsAggregateResponse {
  /**
   * The query results.
   */
  "data"?: CIAppPipelinesAggregationBucketsResponse;
  /**
   * Links attributes.
   */
  "links"?: CIAppResponseLinks;
  /**
   * The metadata associated with a request.
   */
  "meta"?: CIAppResponseMetadata;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      type: "CIAppPipelinesAggregationBucketsResponse",
    },
    links: {
      type: "CIAppResponseLinks",
    },
    meta: {
      type: "CIAppResponseMetadata",
    },
  };
}
