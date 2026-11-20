import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RecommendationsStreamQuery } from "./RecommendationsStreamQuery";
import { RecommendationsStreamRequestColumnsItems } from "./RecommendationsStreamRequestColumnsItems";
import { RecommendationsStreamRequestResponseFormat } from "./RecommendationsStreamRequestResponseFormat";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class RecommendationsStreamRequest {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "columns": Array<RecommendationsStreamRequestColumnsItems>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "query": RecommendationsStreamQuery;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "responseFormat": RecommendationsStreamRequestResponseFormat;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    columns: {
      baseName: "columns",
      type: "Array<RecommendationsStreamRequestColumnsItems>",
      required: true,
    },
    query: {
      baseName: "query",
      type: "RecommendationsStreamQuery",
      required: true,
    },
    responseFormat: {
      baseName: "response_format",
      type: "RecommendationsStreamRequestResponseFormat",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RecommendationsStreamRequest.attributeTypeMap;
  }

  public constructor() {}
}
