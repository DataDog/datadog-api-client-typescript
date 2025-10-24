import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringRuleDetectionMethod } from "./SecurityMonitoringRuleDetectionMethod";
import { SecurityMonitoringRuleEvaluationWindow } from "./SecurityMonitoringRuleEvaluationWindow";
import { SecurityMonitoringRuleImpossibleTravelOptions } from "./SecurityMonitoringRuleImpossibleTravelOptions";
import { SecurityMonitoringRuleKeepAlive } from "./SecurityMonitoringRuleKeepAlive";
import { SecurityMonitoringRuleMaxSignalDuration } from "./SecurityMonitoringRuleMaxSignalDuration";
import { SecurityMonitoringRuleNewValueOptions } from "./SecurityMonitoringRuleNewValueOptions";
import { SecurityMonitoringRuleSequenceDetectionOptions } from "./SecurityMonitoringRuleSequenceDetectionOptions";
import { SecurityMonitoringRuleThirdPartyOptions } from "./SecurityMonitoringRuleThirdPartyOptions";

/**
 * Job options.
 */
export class ThreatHuntingJobOptions {
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
   * Options on impossible travel detection method.
   */
  "impossibleTravelOptions"?: SecurityMonitoringRuleImpossibleTravelOptions;
  /**
   * Once a signal is generated, the signal will remain "open" if a case is matched at least once within
   * this keep alive window. For third party detection method, this field is not used.
   */
  "keepAlive"?: SecurityMonitoringRuleKeepAlive;
  /**
   * A signal will "close" regardless of the query being matched once the time exceeds the maximum duration.
   * This time is calculated from the first seen timestamp.
   */
  "maxSignalDuration"?: SecurityMonitoringRuleMaxSignalDuration;
  /**
   * Options on new value detection method.
   */
  "newValueOptions"?: SecurityMonitoringRuleNewValueOptions;
  /**
   * Options on sequence detection method.
   */
  "sequenceDetectionOptions"?: SecurityMonitoringRuleSequenceDetectionOptions;
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
    detectionMethod: {
      baseName: "detectionMethod",
      type: "SecurityMonitoringRuleDetectionMethod",
    },
    evaluationWindow: {
      baseName: "evaluationWindow",
      type: "SecurityMonitoringRuleEvaluationWindow",
      format: "int32",
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
    sequenceDetectionOptions: {
      baseName: "sequenceDetectionOptions",
      type: "SecurityMonitoringRuleSequenceDetectionOptions",
    },
    thirdPartyRuleOptions: {
      baseName: "thirdPartyRuleOptions",
      type: "SecurityMonitoringRuleThirdPartyOptions",
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
    return ThreatHuntingJobOptions.attributeTypeMap;
  }

  public constructor() {}
}
