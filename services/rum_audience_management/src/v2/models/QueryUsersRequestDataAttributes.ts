import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { QueryUsersRequestDataAttributesSort } from "./QueryUsersRequestDataAttributesSort";

/**
 * Attributes for filtering and shaping the user query results.
 */
export class QueryUsersRequestDataAttributes {
  /**
   * Maximum number of user records to return in the response.
   */
  "limit"?: number;
  /**
   * Filter expression using user attribute conditions to narrow results.
   */
  "query"?: string;
  /**
   * List of user attribute column names to include in the response.
   */
  "selectColumns"?: Array<string>;
  /**
   * Sorting configuration specifying the field and direction for ordering user query results.
   */
  "sort"?: QueryUsersRequestDataAttributesSort;
  /**
   * Free-text term used for wildcard search across user attribute values.
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
      type: "QueryUsersRequestDataAttributesSort",
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
    return QueryUsersRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
