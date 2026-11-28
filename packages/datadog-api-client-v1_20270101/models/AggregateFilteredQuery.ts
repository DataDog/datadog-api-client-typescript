/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AggregateFilteredQueryDataSource } from "./AggregateFilteredQueryDataSource";
import { AggregateFilteredQueryFiltersItems } from "./AggregateFilteredQueryFiltersItems";
import { CompositeCompute } from "./CompositeCompute";
import { CompositeEventsPlatformQuery } from "./CompositeEventsPlatformQuery";
import { CompositeGroupBy } from "./CompositeGroupBy";
import { CompositeSourceSubQuery } from "./CompositeSourceSubQuery";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class AggregateFilteredQuery {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "baseQuery": CompositeEventsPlatformQuery;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "compute": Array<CompositeCompute>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "dataSource": AggregateFilteredQueryDataSource;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "filterQuery": CompositeSourceSubQuery;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "filters": Array<AggregateFilteredQueryFiltersItems>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "groupBy"?: Array<CompositeGroupBy>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "name": string;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    baseQuery: {
      baseName: "base_query",
      type: "CompositeEventsPlatformQuery",
      required: true,
    },
    compute: {
      baseName: "compute",
      type: "Array<CompositeCompute>",
      required: true,
    },
    dataSource: {
      baseName: "data_source",
      type: "AggregateFilteredQueryDataSource",
      required: true,
    },
    filterQuery: {
      baseName: "filter_query",
      type: "CompositeSourceSubQuery",
      required: true,
    },
    filters: {
      baseName: "filters",
      type: "Array<AggregateFilteredQueryFiltersItems>",
      required: true,
    },
    groupBy: {
      baseName: "group_by",
      type: "Array<CompositeGroupBy>",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AggregateFilteredQuery.attributeTypeMap;
  }

  public constructor() {}
}
