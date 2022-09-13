/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SLORawErrorBudgetRemaining } from "./SLORawErrorBudgetRemaining";
import { SLOTimeframe } from "./SLOTimeframe";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Overall status of the SLO by timeframes.
 */
export class SLOOverallStatuses {
  /**
   * Error message if SLO status or error budget could not be calculated.
   */
  "error"?: string;
  /**
   * timestamp (UNIX time in seconds) of when the SLO status and error budget
   * were calculated.
   */
  "indexedAt"?: number;
  /**
   * Error budget remaining for an SLO.
   */
  "rawErrorBudgetRemaining"?: SLORawErrorBudgetRemaining;
  /**
   * The amount of decimal places the SLI value is accurate to.
   */
  "spanPrecision"?: number;
  /**
   * The status of the SLO.
   */
  "status"?: number;
  /**
   * The target of the SLO.
   */
  "target"?: number;
  /**
   * The SLO time window options.
   */
  "timeframe"?: SLOTimeframe;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    error: {
      baseName: "error",
      type: "string",
    },
    indexedAt: {
      baseName: "indexed_at",
      type: "number",
      format: "int64",
    },
    rawErrorBudgetRemaining: {
      baseName: "raw_error_budget_remaining",
      type: "SLORawErrorBudgetRemaining",
    },
    spanPrecision: {
      baseName: "span_precision",
      type: "number",
      format: "int64",
    },
    status: {
      baseName: "status",
      type: "number",
      format: "double",
    },
    target: {
      baseName: "target",
      type: "number",
      format: "double",
    },
    timeframe: {
      baseName: "timeframe",
      type: "SLOTimeframe",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SLOOverallStatuses.attributeTypeMap;
  }

  public constructor() {}
}
