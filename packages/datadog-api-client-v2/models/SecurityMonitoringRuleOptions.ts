/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringRuleDetectionMethod } from "./SecurityMonitoringRuleDetectionMethod";
import { SecurityMonitoringRuleEvaluationWindow } from "./SecurityMonitoringRuleEvaluationWindow";
import { SecurityMonitoringRuleHardcodedEvaluatorType } from "./SecurityMonitoringRuleHardcodedEvaluatorType";
import { SecurityMonitoringRuleImpossibleTravelOptions } from "./SecurityMonitoringRuleImpossibleTravelOptions";
import { SecurityMonitoringRuleKeepAlive } from "./SecurityMonitoringRuleKeepAlive";
import { SecurityMonitoringRuleMaxSignalDuration } from "./SecurityMonitoringRuleMaxSignalDuration";
import { SecurityMonitoringRuleNewValueOptions } from "./SecurityMonitoringRuleNewValueOptions";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Options on rules.
 */
export class SecurityMonitoringRuleOptions {
  /**
   * If true, signals in non-production environments have a lower severity than what is defined by the rule case, which can reduce signal noise.
   * The severity is decreased by one level: `CRITICAL` in production becomes `HIGH` in non-production, `HIGH` becomes `MEDIUM` and so on. `INFO` remains `INFO`.
   * The decrement is applied when the environment tag of the signal starts with `staging`, `test` or `dev`.
   */
  "decreaseCriticalityBasedOnEnv"?: boolean;
  /**
   * The detection method.
   */
  "detectionMethod"?: SecurityMonitoringRuleDetectionMethod;
  /**
   * A time window is specified to match when at least one of the cases matches true. This is a sliding window
   * and evaluates in real time.
   */
  "evaluationWindow"?: SecurityMonitoringRuleEvaluationWindow;
  /**
   * Hardcoded evaluator type.
   */
  "hardcodedEvaluatorType"?: SecurityMonitoringRuleHardcodedEvaluatorType;
  /**
   * Options on impossible travel rules.
   */
  "impossibleTravelOptions"?: SecurityMonitoringRuleImpossibleTravelOptions;
  /**
   * Once a signal is generated, the signal will remain “open” if a case is matched at least once within
   * this keep alive window.
   */
  "keepAlive"?: SecurityMonitoringRuleKeepAlive;
  /**
   * A signal will “close” regardless of the query being matched once the time exceeds the maximum duration.
   * This time is calculated from the first seen timestamp.
   */
  "maxSignalDuration"?: SecurityMonitoringRuleMaxSignalDuration;
  /**
   * Options on new value rules.
   */
  "newValueOptions"?: SecurityMonitoringRuleNewValueOptions;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    decreaseCriticalityBasedOnEnv: {
      baseName: "decreaseCriticalityBasedOnEnv",
      type: "boolean",
    },
    detectionMethod: {
      baseName: "detectionMethod",
      type: "SecurityMonitoringRuleDetectionMethod",
    },
    evaluationWindow: {
      baseName: "evaluationWindow",
      type: "SecurityMonitoringRuleEvaluationWindow",
      format: "int32",
    },
    hardcodedEvaluatorType: {
      baseName: "hardcodedEvaluatorType",
      type: "SecurityMonitoringRuleHardcodedEvaluatorType",
    },
    impossibleTravelOptions: {
      baseName: "impossibleTravelOptions",
      type: "SecurityMonitoringRuleImpossibleTravelOptions",
    },
    keepAlive: {
      baseName: "keepAlive",
      type: "SecurityMonitoringRuleKeepAlive",
      format: "int32",
    },
    maxSignalDuration: {
      baseName: "maxSignalDuration",
      type: "SecurityMonitoringRuleMaxSignalDuration",
      format: "int32",
    },
    newValueOptions: {
      baseName: "newValueOptions",
      type: "SecurityMonitoringRuleNewValueOptions",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SecurityMonitoringRuleOptions.attributeTypeMap;
  }

  public constructor() {}
}
