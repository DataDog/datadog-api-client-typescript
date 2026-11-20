/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FormulaMetricsDataSource } from "./FormulaMetricsDataSource";
import { FormulaSemanticMode } from "./FormulaSemanticMode";
import { HistogramMode } from "./HistogramMode";
import { ScalarAggregator } from "./ScalarAggregator";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class HeatmapBackendRequestAnyOfAnyOfItemQuery {
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
    return HeatmapBackendRequestAnyOfAnyOfItemQuery.attributeTypeMap;
  }

  public constructor() {}
}
