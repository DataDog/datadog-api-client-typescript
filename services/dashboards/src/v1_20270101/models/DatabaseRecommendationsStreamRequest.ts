import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DatabaseRecommendationsStreamQuery } from "./DatabaseRecommendationsStreamQuery";
import { DatabaseRecommendationsStreamRequestColumnsItems } from "./DatabaseRecommendationsStreamRequestColumnsItems";
import { DatabaseRecommendationsStreamRequestResponseFormat } from "./DatabaseRecommendationsStreamRequestResponseFormat";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class DatabaseRecommendationsStreamRequest {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "columns": Array<DatabaseRecommendationsStreamRequestColumnsItems>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "query": DatabaseRecommendationsStreamQuery;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "responseFormat": DatabaseRecommendationsStreamRequestResponseFormat;
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
      type: "Array<DatabaseRecommendationsStreamRequestColumnsItems>",
      required: true,
    },
    query: {
      baseName: "query",
      type: "DatabaseRecommendationsStreamQuery",
      required: true,
    },
    responseFormat: {
      baseName: "response_format",
      type: "DatabaseRecommendationsStreamRequestResponseFormat",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DatabaseRecommendationsStreamRequest.attributeTypeMap;
  }

  public constructor() {}
}
