import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { QueryAccountRequestDataAttributesSort } from "./QueryAccountRequestDataAttributesSort";

/**
 * Attributes for filtering and shaping the account query results.
 */
export class QueryAccountRequestDataAttributes {
  /**
   * Maximum number of account records to return in the response.
   */
  "limit"?: number;
  /**
   * Filter expression using account attribute conditions to narrow results.
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
