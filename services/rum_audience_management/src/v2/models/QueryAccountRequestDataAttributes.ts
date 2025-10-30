import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { QueryAccountRequestDataAttributesSort } from "./QueryAccountRequestDataAttributesSort";

export class QueryAccountRequestDataAttributes {
  "limit"?: number;
  "query"?: string;
  "selectColumns"?: Array<string>;
  "sort"?: QueryAccountRequestDataAttributesSort;
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
