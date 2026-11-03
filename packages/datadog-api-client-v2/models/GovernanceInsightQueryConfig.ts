/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GovernanceInsightDirectionality } from "./GovernanceInsightDirectionality";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Query execution context for running insight queries directly.
 */
export class GovernanceInsightQueryConfig {
  /**
   * The chart type used to render the insight.
   */
  "chartType"?: string;
  /**
   * The window used for the previous value comparison; for example, `week` or `month`.
   */
  "comparisonShift": string;
  /**
   * The default value to display when no data is available.
   */
  "defaultValue"?: number;
  /**
   * Whether an increase in the insight's value is good, bad, or neutral.
   */
  "directionality"?: GovernanceInsightDirectionality;
  /**
   * The number of days the insight value is computed over.
   */
  "effectiveTimeWindowDays": number;

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
    chartType: {
      baseName: "chart_type",
      type: "string",
    },
    comparisonShift: {
      baseName: "comparison_shift",
      type: "string",
      required: true,
    },
    defaultValue: {
      baseName: "default_value",
      type: "number",
      format: "int64",
    },
    directionality: {
      baseName: "directionality",
      type: "GovernanceInsightDirectionality",
    },
    effectiveTimeWindowDays: {
      baseName: "effective_time_window_days",
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
    return GovernanceInsightQueryConfig.attributeTypeMap;
  }

  public constructor() {}
}
