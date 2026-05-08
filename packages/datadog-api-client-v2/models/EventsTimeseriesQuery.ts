/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { EventsCompute } from "./EventsCompute";
import { EventsDataSource } from "./EventsDataSource";
import { EventsGroupBy } from "./EventsGroupBy";
import { EventsSearch } from "./EventsSearch";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * An individual timeseries query for logs, RUM, traces, CI pipelines, security signals, and other event-based data sources. Use this query type for any data source powered by the Events Platform. See the data_source field for the full list of supported sources.
 */
export class EventsTimeseriesQuery {
  /**
   * The instructions for what to compute for this query.
   */
  "compute": EventsCompute;
  /**
   * Organization UUIDs to query when using [cross-organization visibility](/account_management/org_settings/cross_org_visibility/). Limited to one organization UUID.
   */
  "crossOrgUuids"?: Array<string>;
  /**
   * A data source that is powered by the Events Platform.
   */
  "dataSource": EventsDataSource;
  /**
   * The list of facets on which to split results.
   */
  "groupBy"?: Array<EventsGroupBy>;
  /**
   * The indexes in which to search.
   */
  "indexes"?: Array<string>;
  /**
   * The variable name for use in formulas.
   */
  "name"?: string;
  /**
   * Configuration of the search/filter for an events query.
   */
  "search"?: EventsSearch;

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
      type: "EventsCompute",
      required: true,
    },
    crossOrgUuids: {
      baseName: "cross_org_uuids",
      type: "Array<string>",
    },
    dataSource: {
      baseName: "data_source",
      type: "EventsDataSource",
      required: true,
    },
    groupBy: {
      baseName: "group_by",
      type: "Array<EventsGroupBy>",
    },
    indexes: {
      baseName: "indexes",
      type: "Array<string>",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    search: {
      baseName: "search",
      type: "EventsSearch",
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
    return EventsTimeseriesQuery.attributeTypeMap;
  }

  public constructor() {}
}
