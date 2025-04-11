import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CIAppPipelinesAggregationBucketsResponse } from "./CIAppPipelinesAggregationBucketsResponse";
import { CIAppResponseLinks } from "./CIAppResponseLinks";
import { CIAppResponseMetadata } from "./CIAppResponseMetadata";

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
      type: "CIAppPipelinesAggregationBucketsResponse",
    },
    links: {
      baseName: "links",
      type: "CIAppResponseLinks",
    },
    meta: {
      baseName: "meta",
      type: "CIAppResponseMetadata",
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
    return CIAppPipelinesAnalyticsAggregateResponse.attributeTypeMap;
  }

  public constructor() {}
}
