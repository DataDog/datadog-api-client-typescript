import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RUMAggregationBucketsResponse } from "./RUMAggregationBucketsResponse";
import { RUMResponseLinks } from "./RUMResponseLinks";
import { RUMResponseMetadata } from "./RUMResponseMetadata";

/**
 * The response object for the RUM events aggregate API endpoint.
 */
export class RUMAnalyticsAggregateResponse {
  /**
   * The query results.
   */
  "data"?: RUMAggregationBucketsResponse;
  /**
   * Links attributes.
   */
  "links"?: RUMResponseLinks;
  /**
   * The metadata associated with a request.
   */
  "meta"?: RUMResponseMetadata;
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
      type: "RUMAggregationBucketsResponse",
    },
    links: {
      baseName: "links",
      type: "RUMResponseLinks",
    },
    meta: {
      baseName: "meta",
      type: "RUMResponseMetadata",
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
    return RUMAnalyticsAggregateResponse.attributeTypeMap;
  }

  public constructor() {}
}
