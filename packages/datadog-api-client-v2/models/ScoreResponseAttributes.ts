/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Score attributes.
 */
export class ScoreResponseAttributes {
  /**
   * The aggregation type.
   */
  "aggregation": string;
  /**
   * Score denominator.
   */
  "denominator": number;
  /**
   * Score numerator.
   */
  "numerator": number;
  /**
   * Calculated score value.
   */
  "score": number;
  /**
   * Total number of failing rules.
   */
  "totalFail": number;
  /**
   * Total number of rules with no data.
   */
  "totalNoData": number;
  /**
   * Total number of passing rules.
   */
  "totalPass": number;
  /**
   * Total number of skipped rules.
   */
  "totalSkip": number;

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
      type: "string",
      required: true,
    },
    denominator: {
      baseName: "denominator",
      type: "number",
      required: true,
      format: "int64",
    },
    numerator: {
      baseName: "numerator",
      type: "number",
      required: true,
      format: "int64",
    },
    score: {
      baseName: "score",
      type: "number",
      required: true,
      format: "double",
    },
    totalFail: {
      baseName: "total_fail",
      type: "number",
      required: true,
      format: "int64",
    },
    totalNoData: {
      baseName: "total_no_data",
      type: "number",
      required: true,
      format: "int64",
    },
    totalPass: {
      baseName: "total_pass",
      type: "number",
      required: true,
      format: "int64",
    },
    totalSkip: {
      baseName: "total_skip",
      type: "number",
      required: true,
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
    return ScoreResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
