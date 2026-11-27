/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { QueryEventFilteredUsersRequestDataAttributesEventQuery } from "./QueryEventFilteredUsersRequestDataAttributesEventQuery";

import { AttributeTypeMap, Int64 } from "../../datadog-api-client-common/util";

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
  "limit"?: Int64;
  /**
   * Filter expression on user profile attributes, such as `first_country_code:US`.
   * It uses the same attribute names as `select_columns`.
   * Filter timestamp attributes such as `first_seen` or `last_seen` with Unix timestamps in milliseconds, for
   * example
   * `first_seen:>=1793750400000` or `first_seen:[1793750400000 TO 1794355200000]`, or with offsets in
   * milliseconds
   * relative to now, for example `first_seen:[-604800000 TO 0]` for the last 7 days. A range needs an upper
   * bound.
   * Date strings such as `2026-10-26T00:00:00Z` are not supported, because their colons break the query syntax.
   */
  "query"?: string;
  /**
   * User profile attribute names to include in the response, such as `user_id`, `user_email`, `user_name`,
   * `first_seen`, `last_seen`, or `first_country_code`. These are profile attributes, not event facets or
   * computed metrics. An unknown name returns a 400 error. Use the get mapping endpoint with entity `users` to
   * list the
   * attributes available in your organization. Omit it to return every attribute.
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
