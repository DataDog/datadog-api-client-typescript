/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { QueryAccountRequestDataAttributesSort } from "./QueryAccountRequestDataAttributesSort";

import { AttributeTypeMap, Int64 } from "../../datadog-api-client-common/util";

/**
 * Attributes for filtering and shaping the account query results.
 */
export class QueryAccountRequestDataAttributes {
  /**
   * Maximum number of account records to return in the response.
   */
  "limit"?: Int64;
  /**
   * Filter expression using account attribute conditions to narrow results.
   * Filter timestamp attributes such as `first_seen` with Unix timestamps in milliseconds, for example
   * `first_seen:>=1793750400000` or `first_seen:[1793750400000 TO 1794355200000]`, or with offsets in
   * milliseconds
   * relative to now, for example `first_seen:[-604800000 TO 0]` for the last 7 days. A range needs an upper
   * bound.
   * Date strings such as `2026-10-26T00:00:00Z` are not supported, because their colons break the query syntax.
   */
  "query"?: string;
  /**
   * List of account attribute column names to include in the response.
   */
  "selectColumns"?: Array<string>;
  /**
   * Sorting configuration specifying the field and direction for ordering query results.
   */
  "sort"?: QueryAccountRequestDataAttributesSort;
  /**
   * Free-text term used for wildcard search across account attribute values.
   */
  "wildcardSearchTerm"?: string;

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    limit: {
      baseName: "limit",
      type: "number",
      format: "int64",
    },
    query: {
      baseName: "query",
      type: "string",
    },
    selectColumns: {
      baseName: "select_columns",
      type: "Array<string>",
    },
    sort: {
      baseName: "sort",
      type: "QueryAccountRequestDataAttributesSort",
    },
    wildcardSearchTerm: {
      baseName: "wildcard_search_term",
      type: "string",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return QueryAccountRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
