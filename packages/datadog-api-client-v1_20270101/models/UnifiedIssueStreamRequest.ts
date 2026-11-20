/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IssueStreamColumn } from "./IssueStreamColumn";
import { UnifiedIssueStreamQuery } from "./UnifiedIssueStreamQuery";
import { UnifiedIssueStreamRequestResponseFormat } from "./UnifiedIssueStreamRequestResponseFormat";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class UnifiedIssueStreamRequest {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "columns": Array<IssueStreamColumn>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "query": UnifiedIssueStreamQuery;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "responseFormat": UnifiedIssueStreamRequestResponseFormat;

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
      type: "Array<IssueStreamColumn>",
      required: true,
    },
    query: {
      baseName: "query",
      type: "UnifiedIssueStreamQuery",
      required: true,
    },
    responseFormat: {
      baseName: "response_format",
      type: "UnifiedIssueStreamRequestResponseFormat",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return UnifiedIssueStreamRequest.attributeTypeMap;
  }

  public constructor() {}
}
