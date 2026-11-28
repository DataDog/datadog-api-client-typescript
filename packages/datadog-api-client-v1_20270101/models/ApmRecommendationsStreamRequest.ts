/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ApmRecommendationsStreamQuery } from "./ApmRecommendationsStreamQuery";
import { ApmRecommendationsStreamRequestColumnsItems } from "./ApmRecommendationsStreamRequestColumnsItems";
import { ApmRecommendationsStreamRequestResponseFormat } from "./ApmRecommendationsStreamRequestResponseFormat";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
