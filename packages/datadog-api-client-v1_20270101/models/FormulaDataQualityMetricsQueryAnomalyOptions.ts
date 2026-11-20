/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FormulaDataQualityMetricsQueryAnomalyOptionsDirection } from "./FormulaDataQualityMetricsQueryAnomalyOptionsDirection";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
