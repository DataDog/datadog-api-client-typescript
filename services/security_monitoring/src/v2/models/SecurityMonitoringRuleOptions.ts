import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CloudConfigurationComplianceRuleOptions } from "./CloudConfigurationComplianceRuleOptions";
import { SecurityMonitoringRuleDetectionMethod } from "./SecurityMonitoringRuleDetectionMethod";
import { SecurityMonitoringRuleEvaluationWindow } from "./SecurityMonitoringRuleEvaluationWindow";
import { SecurityMonitoringRuleHardcodedEvaluatorType } from "./SecurityMonitoringRuleHardcodedEvaluatorType";
import { SecurityMonitoringRuleImpossibleTravelOptions } from "./SecurityMonitoringRuleImpossibleTravelOptions";
import { SecurityMonitoringRuleKeepAlive } from "./SecurityMonitoringRuleKeepAlive";
import { SecurityMonitoringRuleMaxSignalDuration } from "./SecurityMonitoringRuleMaxSignalDuration";
import { SecurityMonitoringRuleNewValueOptions } from "./SecurityMonitoringRuleNewValueOptions";
import { SecurityMonitoringRuleThirdPartyOptions } from "./SecurityMonitoringRuleThirdPartyOptions";

/**
 * Options.
 */
export class SecurityMonitoringRuleOptions {
  /**
   * Options for cloud_configuration rules.
   * Fields `resourceType` and `regoRule` are mandatory when managing custom `cloud_configuration` rules.
   */
  "complianceRuleOptions"?: CloudConfigurationComplianceRuleOptions;
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
   * and evaluates in real time. For third party detection method, this field is not used.
   */
  "evaluationWindow"?: SecurityMonitoringRuleEvaluationWindow;
  /**
   * Hardcoded evaluator type.
   */
  "hardcodedEvaluatorType"?: SecurityMonitoringRuleHardcodedEvaluatorType;
  /**
   * Options on impossible travel detection method.
   */
  "impossibleTravelOptions"?: SecurityMonitoringRuleImpossibleTravelOptions;
  /**
   * Once a signal is generated, the signal will remain “open” if a case is matched at least once within
   * this keep alive window. For third party detection method, this field is not used.
   */
  "keepAlive"?: SecurityMonitoringRuleKeepAlive;
  /**
   * A signal will “close” regardless of the query being matched once the time exceeds the maximum duration.
   * This time is calculated from the first seen timestamp.
   */
  "maxSignalDuration"?: SecurityMonitoringRuleMaxSignalDuration;
  /**
   * Options on new value detection method.
   */
  "newValueOptions"?: SecurityMonitoringRuleNewValueOptions;
  /**
   * Options on third party detection method.
   */
  "thirdPartyRuleOptions"?: SecurityMonitoringRuleThirdPartyOptions;
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
    complianceRuleOptions: {
      baseName: "complianceRuleOptions",
      type: "CloudConfigurationComplianceRuleOptions",
    },
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
    thirdPartyRuleOptions: {
      baseName: "thirdPartyRuleOptions",
      type: "SecurityMonitoringRuleThirdPartyOptions",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
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
