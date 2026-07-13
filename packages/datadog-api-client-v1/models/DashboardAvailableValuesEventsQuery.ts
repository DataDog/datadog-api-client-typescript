/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DashboardAvailableValuesEventsDataSource } from "./DashboardAvailableValuesEventsDataSource";
import { DashboardAvailableValuesEventsQueryGroupByItems } from "./DashboardAvailableValuesEventsQueryGroupByItems";
import { DashboardAvailableValuesEventsQuerySearch } from "./DashboardAvailableValuesEventsQuerySearch";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Query for available values using an events-based data source (spans, logs, or rum).
 */
export class DashboardAvailableValuesEventsQuery {
  /**
   * The events-based data source for the query.
   */
  "dataSource": DashboardAvailableValuesEventsDataSource;
  /**
   * The fields to group by in the query.
   */
  "groupBy": Array<DashboardAvailableValuesEventsQueryGroupByItems>;
  /**
   * The search filter for the query.
   */
  "search": DashboardAvailableValuesEventsQuerySearch;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    dataSource: {
      baseName: "data_source",
      type: "DashboardAvailableValuesEventsDataSource",
      required: true,
    },
    groupBy: {
      baseName: "group_by",
      type: "Array<DashboardAvailableValuesEventsQueryGroupByItems>",
      required: true,
    },
    search: {
      baseName: "search",
      type: "DashboardAvailableValuesEventsQuerySearch",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DashboardAvailableValuesEventsQuery.attributeTypeMap;
  }

  public constructor() {}
}
