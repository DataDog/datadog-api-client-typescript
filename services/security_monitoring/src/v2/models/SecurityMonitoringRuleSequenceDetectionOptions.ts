import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringRuleSequenceDetectionStep } from "./SecurityMonitoringRuleSequenceDetectionStep";
import { SecurityMonitoringRuleSequenceDetectionStepTransition } from "./SecurityMonitoringRuleSequenceDetectionStepTransition";

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
