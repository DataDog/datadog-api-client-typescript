import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SankeyNetworkDataSource } from "./SankeyNetworkDataSource";
import { SankeyNetworkQueryCompute } from "./SankeyNetworkQueryCompute";
import { SankeyNetworkQueryMode } from "./SankeyNetworkQueryMode";
import { SankeyNetworkQuerySort } from "./SankeyNetworkQuerySort";

/**
 * Query configuration for Sankey network widget.
 */
export class SankeyNetworkQuery {
  /**
   * Compute aggregation for network queries.
   */
  "compute"?: SankeyNetworkQueryCompute;
  /**
   * Network data source type.
   */
  "dataSource": SankeyNetworkDataSource;
  /**
   * Fields to group by.
   */
  "groupBy": Array<string>;
  /**
   * Maximum number of results.
   */
  "limit": number;
  /**
   * Sankey mode for network queries.
   */
  "mode"?: SankeyNetworkQueryMode;
  /**
   * Query string for filtering network data.
   */
  "queryString": string;
  /**
   * Whether to exclude missing values.
   */
  "shouldExcludeMissing"?: boolean;
  /**
   * Sort configuration for network queries.
   */
  "sort"?: SankeyNetworkQuerySort;
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
      type: "SankeyNetworkQueryCompute",
    },
    dataSource: {
      baseName: "data_source",
      type: "SankeyNetworkDataSource",
      required: true,
    },
    groupBy: {
      baseName: "group_by",
      type: "Array<string>",
      required: true,
    },
    limit: {
      baseName: "limit",
      type: "number",
      required: true,
      format: "int64",
    },
    mode: {
      baseName: "mode",
      type: "SankeyNetworkQueryMode",
    },
    queryString: {
      baseName: "query_string",
      type: "string",
      required: true,
    },
    shouldExcludeMissing: {
      baseName: "should_exclude_missing",
      type: "boolean",
    },
    sort: {
      baseName: "sort",
      type: "SankeyNetworkQuerySort",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SankeyNetworkQuery.attributeTypeMap;
  }

  public constructor() {}
}
