/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ScorecardScoresAggregation } from "./ScorecardScoresAggregation";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of a scorecard score.
 */
export class ScorecardScoreAttributes {
  /**
   * Dimension to group scores by.
   */
  "aggregation"?: ScorecardScoresAggregation;
  /**
   * The denominator used to compute the score ratio.
   */
  "denominator"?: number;
  /**
   * The maturity level of the associated rule.
   */
  "level"?: number;
  /**
   * The numerator used to compute the score ratio.
   */
  "numerator"?: number;
  /**
   * The computed score ratio (numerator/denominator), from 0 to 1.
   */
  "score"?: number;
  /**
   * The total number of entities evaluated.
   */
  "totalEntities"?: number;
  /**
   * The number of rules that failed.
   */
  "totalFail"?: number;
  /**
   * The number of rules with no data.
   */
  "totalNoData"?: number;
  /**
   * The number of rules that passed.
   */
  "totalPass"?: number;
  /**
   * The number of rules that were skipped.
   */
  "totalSkip"?: number;

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    aggregation: {
      baseName: "aggregation",
      type: "ScorecardScoresAggregation",
    },
    denominator: {
      baseName: "denominator",
      type: "number",
      format: "int64",
    },
    level: {
      baseName: "level",
      type: "number",
      format: "int64",
    },
    numerator: {
      baseName: "numerator",
      type: "number",
      format: "int64",
    },
    score: {
      baseName: "score",
      type: "number",
      format: "double",
    },
    totalEntities: {
      baseName: "total_entities",
      type: "number",
      format: "int64",
    },
    totalFail: {
      baseName: "total_fail",
      type: "number",
      format: "int64",
    },
    totalNoData: {
      baseName: "total_no_data",
      type: "number",
      format: "int64",
    },
    totalPass: {
      baseName: "total_pass",
      type: "number",
      format: "int64",
    },
    totalSkip: {
      baseName: "total_skip",
      type: "number",
      format: "int64",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ScorecardScoreAttributes.attributeTypeMap;
  }

  public constructor() {}
}
