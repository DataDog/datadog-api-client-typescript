import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FormulaMetricsDataSource } from "./FormulaMetricsDataSource";
import { FormulaSemanticMode } from "./FormulaSemanticMode";
import { HistogramMode } from "./HistogramMode";
import { ScalarAggregator } from "./ScalarAggregator";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class DistributionBackendRequestAnyOfAnyOfItemQuery {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "aggregator"?: ScalarAggregator;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "byocCluster"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "crossOrgUuids"?: Array<string>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "dataSource": FormulaMetricsDataSource;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "histogramMode"?: HistogramMode;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "name": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "query": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "semanticMode"?: FormulaSemanticMode;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    aggregator: {
      baseName: "aggregator",
      type: "ScalarAggregator",
    },
    byocCluster: {
      baseName: "byoc_cluster",
      type: "string",
    },
    crossOrgUuids: {
      baseName: "cross_org_uuids",
      type: "Array<string>",
    },
    dataSource: {
      baseName: "data_source",
      type: "FormulaMetricsDataSource",
      required: true,
    },
    histogramMode: {
      baseName: "histogram_mode",
      type: "HistogramMode",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    query: {
      baseName: "query",
      type: "string",
      required: true,
    },
    semanticMode: {
      baseName: "semantic_mode",
      type: "FormulaSemanticMode",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DistributionBackendRequestAnyOfAnyOfItemQuery.attributeTypeMap;
  }

  public constructor() {}
}
