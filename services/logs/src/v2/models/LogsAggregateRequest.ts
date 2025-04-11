import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LogsAggregateRequestPage } from "./LogsAggregateRequestPage";
import { LogsCompute } from "./LogsCompute";
import { LogsGroupBy } from "./LogsGroupBy";
import { LogsQueryFilter } from "./LogsQueryFilter";
import { LogsQueryOptions } from "./LogsQueryOptions";

/**
 * The object sent with the request to retrieve a list of logs from your organization.
 */
export class LogsAggregateRequest {
  /**
   * The list of metrics or timeseries to compute for the retrieved buckets.
   */
  "compute"?: Array<LogsCompute>;
  /**
   * The search and filter query settings
   */
  "filter"?: LogsQueryFilter;
  /**
   * The rules for the group by
   */
  "groupBy"?: Array<LogsGroupBy>;
  /**
   * Global query options that are used during the query.
   * Note: These fields are currently deprecated and do not affect the query results.
   */
  "options"?: LogsQueryOptions;
  /**
   * Paging settings
   */
  "page"?: LogsAggregateRequestPage;
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
    compute: {
      baseName: "compute",
      type: "Array<LogsCompute>",
    },
    filter: {
      baseName: "filter",
      type: "LogsQueryFilter",
    },
    groupBy: {
      baseName: "group_by",
      type: "Array<LogsGroupBy>",
    },
    options: {
      baseName: "options",
      type: "LogsQueryOptions",
    },
    page: {
      baseName: "page",
      type: "LogsAggregateRequestPage",
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
    return LogsAggregateRequest.attributeTypeMap;
  }

  public constructor() {}
}
