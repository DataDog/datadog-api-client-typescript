import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DatasetCompute } from "./DatasetCompute";
import { DatasetGroupBy } from "./DatasetGroupBy";
import { DatasetSort } from "./DatasetSort";
import { FormulaDatasetQueryDataSource } from "./FormulaDatasetQueryDataSource";
import { PublishedDatasetProvider } from "./PublishedDatasetProvider";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class FormulaDatasetQuery {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "compute": Array<DatasetCompute>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "dataSource": FormulaDatasetQueryDataSource;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "datasetId": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "datasetProvider": PublishedDatasetProvider;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "groupBy"?: Array<DatasetGroupBy>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "limit"?: number;
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
  "sort"?: Array<DatasetSort>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "timeColumn"?: string;
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
      type: "FormulaDatasetQueryDataSource",
      required: true,
    },
    datasetId: {
      baseName: "dataset_id",
      type: "string",
      required: true,
    },
    datasetProvider: {
      baseName: "dataset_provider",
      type: "PublishedDatasetProvider",
      required: true,
    },
    groupBy: {
      baseName: "group_by",
      type: "Array<DatasetGroupBy>",
    },
    limit: {
      baseName: "limit",
      type: "number",
      format: "double",
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
    sort: {
      baseName: "sort",
      type: "Array<DatasetSort>",
    },
    timeColumn: {
      baseName: "time_column",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return FormulaDatasetQuery.attributeTypeMap;
  }

  public constructor() {}
}
