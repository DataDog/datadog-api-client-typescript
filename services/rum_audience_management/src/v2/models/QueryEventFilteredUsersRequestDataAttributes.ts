import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { QueryEventFilteredUsersRequestDataAttributesEventQuery } from "./QueryEventFilteredUsersRequestDataAttributesEventQuery";

export class QueryEventFilteredUsersRequestDataAttributes {
  "eventQuery"?: QueryEventFilteredUsersRequestDataAttributesEventQuery;
  "includeRowCount"?: boolean;
  "limit"?: number;
  "query"?: string;
  "selectColumns"?: Array<string>;
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
    eventQuery: {
      baseName: "event_query",
      type: "QueryEventFilteredUsersRequestDataAttributesEventQuery",
    },
    includeRowCount: {
      baseName: "include_row_count",
      type: "boolean",
    },
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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return QueryEventFilteredUsersRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
