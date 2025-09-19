/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringRuleSequenceDetectionStep } from "./SecurityMonitoringRuleSequenceDetectionStep";
import { SecurityMonitoringRuleSequenceDetectionStepTransition } from "./SecurityMonitoringRuleSequenceDetectionStepTransition";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Options on sequence detection method.
 */
export class SecurityMonitoringRuleSequenceDetectionOptions {
  /**
   * Transitions defining the allowed order of steps and their evaluation windows.
   */
  "stepTransitions"?: Array<SecurityMonitoringRuleSequenceDetectionStepTransition>;
  /**
   * Steps that define the conditions to be matched in sequence.
   */
  "steps"?: Array<SecurityMonitoringRuleSequenceDetectionStep>;

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
    stepTransitions: {
      baseName: "stepTransitions",
      type: "Array<SecurityMonitoringRuleSequenceDetectionStepTransition>",
    },
    steps: {
      baseName: "steps",
      type: "Array<SecurityMonitoringRuleSequenceDetectionStep>",
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
    return SecurityMonitoringRuleSequenceDetectionOptions.attributeTypeMap;
  }

  public constructor() {}
}
