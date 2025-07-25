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
    data: {
      baseName: "data",
      type: "CIAppTestsAggregationBucketsResponse",
    },
    links: {
      baseName: "links",
      type: "CIAppResponseLinks",
    },
    meta: {
      baseName: "meta",
      type: "CIAppResponseMetadataWithPagination",
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
    return CIAppTestsAnalyticsAggregateResponse.attributeTypeMap;
  }

  public constructor() {}
}
