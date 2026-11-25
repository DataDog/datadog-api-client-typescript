import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FormulaDataQualityMetricsQueryAnomalyOptionsDirection } from "./FormulaDataQualityMetricsQueryAnomalyOptionsDirection";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class FormulaDataQualityMetricsQueryAnomalyOptions {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "direction"?: FormulaDataQualityMetricsQueryAnomalyOptionsDirection;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "ruleId"?: number;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    direction: {
      baseName: "direction",
      type: "FormulaDataQualityMetricsQueryAnomalyOptionsDirection",
    },
    ruleId: {
      baseName: "rule_id",
      type: "number",
      format: "double",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return FormulaDataQualityMetricsQueryAnomalyOptions.attributeTypeMap;
  }

  public constructor() {}
}
