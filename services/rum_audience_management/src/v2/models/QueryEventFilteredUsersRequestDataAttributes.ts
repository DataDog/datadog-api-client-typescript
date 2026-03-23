import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { QueryEventFilteredUsersRequestDataAttributesEventQuery } from "./QueryEventFilteredUsersRequestDataAttributesEventQuery";

/**
 * Attributes for filtering users by both user properties and event platform activity.
 */
export class QueryEventFilteredUsersRequestDataAttributes {
  /**
   * Event platform query used to filter users based on their event activity within a specified time window.
   */
  "eventQuery"?: QueryEventFilteredUsersRequestDataAttributesEventQuery;
  /**
   * Whether to include the total count of matching users in the response.
   */
  "includeRowCount"?: boolean;
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
