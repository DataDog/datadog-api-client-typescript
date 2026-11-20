import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ReferentialDatasetReferenceTableDataSource } from "./ReferentialDatasetReferenceTableDataSource";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class ReferentialDatasetReferenceTable {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "dataSource": ReferentialDatasetReferenceTableDataSource;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "name": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "queryFilter"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "tableName": string;
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
      type: "ReferentialDatasetReferenceTableDataSource",
      required: true,
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
    tableName: {
      baseName: "table_name",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ReferentialDatasetReferenceTable.attributeTypeMap;
  }

  public constructor() {}
}
