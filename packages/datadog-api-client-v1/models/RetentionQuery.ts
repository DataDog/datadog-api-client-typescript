/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RetentionCompute } from "./RetentionCompute";
import { RetentionDataSource } from "./RetentionDataSource";
import { RetentionFilters } from "./RetentionFilters";
import { RetentionGroupBy } from "./RetentionGroupBy";
import { RetentionSearch } from "./RetentionSearch";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Retention query definition.
 */
export class RetentionQuery {
  /**
   * Compute configuration for retention queries.
   */
  "compute": RetentionCompute;
  /**
   * Data source for retention queries.
   */
  "dataSource": RetentionDataSource;
  /**
   * Filters for retention queries.
   */
  "filters"?: RetentionFilters;
  /**
   * Group by configuration.
   */
  "groupBy"?: Array<RetentionGroupBy>;
  /**
   * Name of the query.
   */
  "name"?: string;
  /**
   * Search configuration for retention queries.
   */
  "search": RetentionSearch;

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
      type: "RetentionCompute",
      required: true,
    },
    dataSource: {
      baseName: "data_source",
      type: "RetentionDataSource",
      required: true,
    },
    filters: {
      baseName: "filters",
      type: "RetentionFilters",
    },
    groupBy: {
      baseName: "group_by",
      type: "Array<RetentionGroupBy>",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    search: {
      baseName: "search",
      type: "RetentionSearch",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RetentionQuery.attributeTypeMap;
  }

  public constructor() {}
}
