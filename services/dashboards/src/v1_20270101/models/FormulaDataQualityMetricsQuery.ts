import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FormulaDataQualityMetricsQueryAnomalyOptions } from "./FormulaDataQualityMetricsQueryAnomalyOptions";
import { FormulaDataQualityMetricsQueryDataSource } from "./FormulaDataQualityMetricsQueryDataSource";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class FormulaDataQualityMetricsQuery {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "anomalyOptions"?: FormulaDataQualityMetricsQueryAnomalyOptions;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "dataSource": FormulaDataQualityMetricsQueryDataSource;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "filter": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "groupBy"?: Array<string>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "measure": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "name": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "scope"?: string;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    anomalyOptions: {
      baseName: "anomaly_options",
      type: "FormulaDataQualityMetricsQueryAnomalyOptions",
    },
    dataSource: {
      baseName: "data_source",
      type: "FormulaDataQualityMetricsQueryDataSource",
      required: true,
    },
    filter: {
      baseName: "filter",
      type: "string",
      required: true,
    },
    groupBy: {
      baseName: "group_by",
      type: "Array<string>",
    },
    measure: {
      baseName: "measure",
      type: "string",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    scope: {
      baseName: "scope",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return FormulaDataQualityMetricsQuery.attributeTypeMap;
  }

  public constructor() {}
}
