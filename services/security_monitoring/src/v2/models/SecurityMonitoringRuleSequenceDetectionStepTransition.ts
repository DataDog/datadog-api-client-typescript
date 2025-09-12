import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringRuleEvaluationWindow } from "./SecurityMonitoringRuleEvaluationWindow";

/**
 * Transition from a parent step to a child step within a sequence detection rule.
 */
export class SecurityMonitoringRuleSequenceDetectionStepTransition {
  /**
   * Name of the child step.
   */
  "child"?: string;
  /**
   * A time window is specified to match when at least one of the cases matches true. This is a sliding window
   * and evaluates in real time. For third party detection method, this field is not used.
   */
  "evaluationWindow"?: SecurityMonitoringRuleEvaluationWindow;
  /**
   * Name of the parent step.
   */
  "parent"?: string;
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
    child: {
      baseName: "child",
      type: "string",
    },
    evaluationWindow: {
      baseName: "evaluationWindow",
      type: "SecurityMonitoringRuleEvaluationWindow",
      format: "int32",
    },
    parent: {
      baseName: "parent",
      type: "string",
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
    return SecurityMonitoringRuleSequenceDetectionStepTransition.attributeTypeMap;
  }

  public constructor() {}
}
