import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CIAppResponseLinks } from "./CIAppResponseLinks";
import { CIAppResponseMetadataWithPagination } from "./CIAppResponseMetadataWithPagination";
import { CIAppTestsAggregationBucketsResponse } from "./CIAppTestsAggregationBucketsResponse";

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
