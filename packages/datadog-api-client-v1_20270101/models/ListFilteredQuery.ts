/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CompositeEventsPlatformQuery } from "./CompositeEventsPlatformQuery";
import { CompositeSourceSubQuery } from "./CompositeSourceSubQuery";
import { EventsContext } from "./EventsContext";
import { ListFilteredQueryDataSource } from "./ListFilteredQueryDataSource";
import { ListFilteredQueryFiltersItems } from "./ListFilteredQueryFiltersItems";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class ListFilteredQuery {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "baseQuery": CompositeEventsPlatformQuery;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "context"?: EventsContext;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "dataSource": ListFilteredQueryDataSource;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "filterQuery": CompositeSourceSubQuery;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "filters": Array<ListFilteredQueryFiltersItems>;
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
    context: {
      baseName: "context",
      type: "EventsContext",
    },
    dataSource: {
      baseName: "data_source",
      type: "ListFilteredQueryDataSource",
      required: true,
    },
    filterQuery: {
      baseName: "filter_query",
      type: "CompositeSourceSubQuery",
      required: true,
    },
    filters: {
      baseName: "filters",
      type: "Array<ListFilteredQueryFiltersItems>",
      required: true,
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
    return ListFilteredQuery.attributeTypeMap;
  }

  public constructor() {}
}
