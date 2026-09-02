/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MonitorFormulaAndFunctionDataQualityDiffFunction } from "./MonitorFormulaAndFunctionDataQualityDiffFunction";
import { MonitorFormulaAndFunctionDataQualityModelBoundsOverride } from "./MonitorFormulaAndFunctionDataQualityModelBoundsOverride";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Tuning options for the anomaly detection model used by the monitor.
 */
export class MonitorFormulaAndFunctionDataQualityModelConfiguration {
  /**
   * Number of days after which an open alert is automatically resolved.
   * When unset, alerts stay open until the measure returns within bounds.
   */
  "autoResolveDays"?: number;
  /**
   * Whether to alert when the measure stops changing entirely.
   * Defaults to `true`.
   */
  "enableFlatlineDetection"?: boolean;
  /**
   * Function applied to the measure before it is compared against the predicted bounds.
   */
  "_function"?: MonitorFormulaAndFunctionDataQualityDiffFunction;
  /**
   * Minimum distance between the predicted value and the lower bound. Widening the
   * lower bound to at least this size suppresses alerts on small downward deviations.
   * When unset, no minimum is enforced.
   */
  "minLowerBoundSize"?: number;
  /**
   * Minimum distance between the predicted value and the upper bound. Widening the
   * upper bound to at least this size suppresses alerts on small upward deviations.
   * When unset, no minimum is enforced.
   */
  "minUpperBoundSize"?: number;
  /**
   * Restricts which predicted bound the monitor alerts on. `UPPER_ONLY` alerts only when
   * the measure rises above the upper bound, `LOWER_ONLY` only when it falls below the
   * lower bound. When unset, the monitor alerts on both.
   */
  "modelBoundsOverride"?: MonitorFormulaAndFunctionDataQualityModelBoundsOverride;

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
    autoResolveDays: {
      baseName: "auto_resolve_days",
      type: "number",
      format: "int32",
    },
    enableFlatlineDetection: {
      baseName: "enable_flatline_detection",
      type: "boolean",
    },
    _function: {
      baseName: "function",
      type: "MonitorFormulaAndFunctionDataQualityDiffFunction",
    },
    minLowerBoundSize: {
      baseName: "min_lower_bound_size",
      type: "number",
      format: "double",
    },
    minUpperBoundSize: {
      baseName: "min_upper_bound_size",
      type: "number",
      format: "double",
    },
    modelBoundsOverride: {
      baseName: "model_bounds_override",
      type: "MonitorFormulaAndFunctionDataQualityModelBoundsOverride",
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
    return MonitorFormulaAndFunctionDataQualityModelConfiguration.attributeTypeMap;
  }

  public constructor() {}
}
