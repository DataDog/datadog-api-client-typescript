/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SqlAnalysisQueryType } from "./SqlAnalysisQueryType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
