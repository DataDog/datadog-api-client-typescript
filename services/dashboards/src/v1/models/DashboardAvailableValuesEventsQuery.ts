import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DashboardAvailableValuesEventsDataSource } from "./DashboardAvailableValuesEventsDataSource";
import { DashboardAvailableValuesEventsQueryGroupByItems } from "./DashboardAvailableValuesEventsQueryGroupByItems";
import { DashboardAvailableValuesEventsQuerySearch } from "./DashboardAvailableValuesEventsQuerySearch";

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
