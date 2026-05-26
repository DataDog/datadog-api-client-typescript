import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringDatasetColumn } from "./SecurityMonitoringDatasetColumn";
import { SecurityMonitoringDatasetSearch } from "./SecurityMonitoringDatasetSearch";
import { SecurityMonitoringDatasetTimeWindow } from "./SecurityMonitoringDatasetTimeWindow";

/**
 * The definition of the dataset. The shape depends on the value of `data_source`.
 * Use `reference_table` or `managed_resource` for a referential dataset, or one of the
 * event platform sources (for example `logs`, `audit`, `events`, `spans`, `rum`) for
 * an event platform dataset.
 */
export class SecurityMonitoringDatasetDefinition {
  /**
   * For event platform datasets, the list of columns exposed by the dataset.
   */
  "columns"?: Array<SecurityMonitoringDatasetColumn>;
  /**
   * The data source backing this dataset definition.
   */
  "dataSource": string;
  /**
   * For event platform datasets, the list of indexes to query.
   */
  "indexes"?: Array<string>;
  /**
   * The unique name of the dataset. Must start with a lowercase letter and contain only lowercase letters, digits, and underscores (max 255 characters).
   */
  "name": string;
  /**
   * For referential datasets, an optional filter expression applied to the table.
   */
  "queryFilter"?: string;
  /**
   * The search clause applied to an event platform dataset.
   */
  "search"?: SecurityMonitoringDatasetSearch;
  /**
   * Storage tier the dataset reads from. Applies to event platform datasets.
   */
  "storage"?: string;
  /**
   * For referential datasets, the name of the underlying table.
   */
  "tableName"?: string;
  /**
   * An optional time window that overrides the default query time range.
   */
  "timeWindow"?: SecurityMonitoringDatasetTimeWindow;
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
    columns: {
      baseName: "columns",
      type: "Array<SecurityMonitoringDatasetColumn>",
    },
    dataSource: {
      baseName: "data_source",
      type: "string",
      required: true,
    },
    indexes: {
      baseName: "indexes",
      type: "Array<string>",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    queryFilter: {
      baseName: "query_filter",
      type: "string",
    },
    search: {
      baseName: "search",
      type: "SecurityMonitoringDatasetSearch",
    },
    storage: {
      baseName: "storage",
      type: "string",
    },
    tableName: {
      baseName: "table_name",
      type: "string",
    },
    timeWindow: {
      baseName: "time_window",
      type: "SecurityMonitoringDatasetTimeWindow",
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
    return SecurityMonitoringDatasetDefinition.attributeTypeMap;
  }

  public constructor() {}
}
