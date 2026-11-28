/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DatabaseRecommendationsStreamQuery } from "./DatabaseRecommendationsStreamQuery";
import { DatabaseRecommendationsStreamRequestColumnsItems } from "./DatabaseRecommendationsStreamRequestColumnsItems";
import { DatabaseRecommendationsStreamRequestResponseFormat } from "./DatabaseRecommendationsStreamRequestResponseFormat";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
