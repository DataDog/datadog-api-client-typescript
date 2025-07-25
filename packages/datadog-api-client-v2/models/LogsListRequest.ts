/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LogsListRequestPage } from "./LogsListRequestPage";
import { LogsQueryFilter } from "./LogsQueryFilter";
import { LogsQueryOptions } from "./LogsQueryOptions";
import { LogsSort } from "./LogsSort";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
      type: "{ [key: string]: any; }",
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
