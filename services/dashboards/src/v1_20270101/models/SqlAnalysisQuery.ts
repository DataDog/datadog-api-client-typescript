import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SqlAnalysisQueryType } from "./SqlAnalysisQueryType";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class SqlAnalysisQuery {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "sqlQuery": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": SqlAnalysisQueryType;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    sqlQuery: {
      baseName: "sql_query",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SqlAnalysisQueryType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SqlAnalysisQuery.attributeTypeMap;
  }

  public constructor() {}
}
