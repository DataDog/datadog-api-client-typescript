import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SnowflakeQueryDatasetDataSource } from "./SnowflakeQueryDatasetDataSource";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class SnowflakeQueryDataset {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "dataSource": SnowflakeQueryDatasetDataSource;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "name": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "sqlQuery": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "warehouse"?: string;
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
      type: "SnowflakeQueryDatasetDataSource",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    sqlQuery: {
      baseName: "sql_query",
      type: "string",
      required: true,
    },
    warehouse: {
      baseName: "warehouse",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SnowflakeQueryDataset.attributeTypeMap;
  }

  public constructor() {}
}
