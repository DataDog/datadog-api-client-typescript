/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CIAppResponseLinks } from "./CIAppResponseLinks";
import { CIAppResponseMetadataWithPagination } from "./CIAppResponseMetadataWithPagination";
import { CIAppTestsAggregationBucketsResponse } from "./CIAppTestsAggregationBucketsResponse";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The response object for the test events aggregate API endpoint.
 */
export class CIAppTestsAnalyticsAggregateResponse {
  /**
   * The query results.
   */
  "data"?: CIAppTestsAggregationBucketsResponse;
  /**
   * Links attributes.
   */
  "links"?: CIAppResponseLinks;
  /**
   * The metadata associated with a request.
   */
  "meta"?: CIAppResponseMetadataWithPagination;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      type: "CIAppTestsAggregationBucketsResponse",
    },
    links: {
      type: "CIAppResponseLinks",
    },
    meta: {
      type: "CIAppResponseMetadataWithPagination",
    },
  };
}
