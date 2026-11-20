import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IssueStreamColumn } from "./IssueStreamColumn";
import { LegacyIssueStreamRequest20270101Query } from "./LegacyIssueStreamRequest20270101Query";
import { LegacyIssueStreamRequestResponseFormat } from "./LegacyIssueStreamRequestResponseFormat";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class LegacyIssueStreamRequest {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "columns": Array<IssueStreamColumn>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "query": LegacyIssueStreamRequest20270101Query;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "responseFormat": LegacyIssueStreamRequestResponseFormat;
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
      type: "LegacyIssueStreamRequest20270101Query",
      required: true,
    },
    responseFormat: {
      baseName: "response_format",
      type: "LegacyIssueStreamRequestResponseFormat",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return LegacyIssueStreamRequest.attributeTypeMap;
  }

  public constructor() {}
}
