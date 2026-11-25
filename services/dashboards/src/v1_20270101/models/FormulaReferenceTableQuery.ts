import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DatasetCompute } from "./DatasetCompute";
import { DatasetGroupBy } from "./DatasetGroupBy";
import { FormulaReferenceTableQueryDataSource } from "./FormulaReferenceTableQueryDataSource";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class FormulaReferenceTableQuery {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "compute": Array<DatasetCompute>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "dataSource": FormulaReferenceTableQueryDataSource;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "groupBy"?: Array<DatasetGroupBy>;
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
    compute: {
      baseName: "compute",
      type: "Array<DatasetCompute>",
      required: true,
    },
    dataSource: {
      baseName: "data_source",
      type: "FormulaReferenceTableQueryDataSource",
      required: true,
    },
    groupBy: {
      baseName: "group_by",
      type: "Array<DatasetGroupBy>",
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
    return FormulaReferenceTableQuery.attributeTypeMap;
  }

  public constructor() {}
}
