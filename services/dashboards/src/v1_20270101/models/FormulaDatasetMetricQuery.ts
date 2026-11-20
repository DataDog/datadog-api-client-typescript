import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FormulaDatasetMetricQueryDataSource } from "./FormulaDatasetMetricQueryDataSource";
import { ScalarAggregator } from "./ScalarAggregator";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class FormulaDatasetMetricQuery {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "aggregator"?: ScalarAggregator;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "dataSource": FormulaDatasetMetricQueryDataSource;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "name": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "query": string;
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
    dataSource: {
      baseName: "data_source",
      type: "FormulaDatasetMetricQueryDataSource",
      required: true,
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
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return FormulaDatasetMetricQuery.attributeTypeMap;
  }

  public constructor() {}
}
