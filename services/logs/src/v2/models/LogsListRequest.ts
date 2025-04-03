import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LogsListRequestPage } from "./LogsListRequestPage";
import { LogsQueryFilter } from "./LogsQueryFilter";
import { LogsQueryOptions } from "./LogsQueryOptions";
import { LogsSort } from "./LogsSort";

/**
 * The request for a logs list.
 */
export class LogsListRequest {
  /**
   * The search and filter query settings
   */
  "filter"?: LogsQueryFilter;
  /**
   * Global query options that are used during the query.
   * Note: These fields are currently deprecated and do not affect the query results.
   */
  "options"?: LogsQueryOptions;
  /**
   * Paging attributes for listing logs.
   */
  "page"?: LogsListRequestPage;
  /**
   * Sort parameters when querying logs.
   */
  "sort"?: LogsSort;
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
    filter: {
      baseName: "filter",
      type: "LogsQueryFilter",
    },
    options: {
      baseName: "options",
      type: "LogsQueryOptions",
    },
    page: {
      baseName: "page",
      type: "LogsListRequestPage",
    },
    sort: {
      baseName: "sort",
      type: "LogsSort",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return LogsListRequest.attributeTypeMap;
  }

  public constructor() {}
}
