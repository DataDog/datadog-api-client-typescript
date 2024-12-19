/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringRuleDetectionMethod } from "./SecurityMonitoringRuleDetectionMethod";
import { SecurityMonitoringRuleEvaluationWindow } from "./SecurityMonitoringRuleEvaluationWindow";
import { SecurityMonitoringRuleImpossibleTravelOptions } from "./SecurityMonitoringRuleImpossibleTravelOptions";
import { SecurityMonitoringRuleKeepAlive } from "./SecurityMonitoringRuleKeepAlive";
import { SecurityMonitoringRuleMaxSignalDuration } from "./SecurityMonitoringRuleMaxSignalDuration";
import { SecurityMonitoringRuleNewValueOptions } from "./SecurityMonitoringRuleNewValueOptions";
import { SecurityMonitoringRuleThirdPartyOptions } from "./SecurityMonitoringRuleThirdPartyOptions";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Job options.
 */
export class HistoricalJobOptions {
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
    return HistoricalJobOptions.attributeTypeMap;
  }

  public constructor() {}
}
