import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { QueryUsersRequestDataAttributesSort } from "./QueryUsersRequestDataAttributesSort";

export class QueryUsersRequestDataAttributes {
  "limit"?: number;
  "query"?: string;
  "selectColumns"?: Array<string>;
  "sort"?: QueryUsersRequestDataAttributesSort;
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
