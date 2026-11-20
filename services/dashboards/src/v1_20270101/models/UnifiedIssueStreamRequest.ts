import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IssueStreamColumn } from "./IssueStreamColumn";
import { UnifiedIssueStreamQuery } from "./UnifiedIssueStreamQuery";
import { UnifiedIssueStreamRequestResponseFormat } from "./UnifiedIssueStreamRequestResponseFormat";

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
