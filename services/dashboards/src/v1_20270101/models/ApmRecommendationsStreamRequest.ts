import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ApmRecommendationsStreamQuery } from "./ApmRecommendationsStreamQuery";
import { ApmRecommendationsStreamRequestColumnsItems } from "./ApmRecommendationsStreamRequestColumnsItems";
import { ApmRecommendationsStreamRequestResponseFormat } from "./ApmRecommendationsStreamRequestResponseFormat";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class ApmRecommendationsStreamRequest {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "columns": Array<ApmRecommendationsStreamRequestColumnsItems>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "query": ApmRecommendationsStreamQuery;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "responseFormat": ApmRecommendationsStreamRequestResponseFormat;
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
      type: "Array<ApmRecommendationsStreamRequestColumnsItems>",
      required: true,
    },
    query: {
      baseName: "query",
      type: "ApmRecommendationsStreamQuery",
      required: true,
    },
    responseFormat: {
      baseName: "response_format",
      type: "ApmRecommendationsStreamRequestResponseFormat",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ApmRecommendationsStreamRequest.attributeTypeMap;
  }

  public constructor() {}
}
