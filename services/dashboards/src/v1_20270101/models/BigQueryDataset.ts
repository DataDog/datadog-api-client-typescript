import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { BigQueryDatasetDataSource } from "./BigQueryDatasetDataSource";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class BigQueryDataset {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "dataSource": BigQueryDatasetDataSource;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "name": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "sqlQuery": string;
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
      type: "BigQueryDatasetDataSource",
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
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return BigQueryDataset.attributeTypeMap;
  }

  public constructor() {}
}
