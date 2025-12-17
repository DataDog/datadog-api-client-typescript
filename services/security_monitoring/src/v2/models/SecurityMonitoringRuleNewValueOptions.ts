import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringRuleNewValueOptionsForgetAfter } from "./SecurityMonitoringRuleNewValueOptionsForgetAfter";
import { SecurityMonitoringRuleNewValueOptionsLearningDuration } from "./SecurityMonitoringRuleNewValueOptionsLearningDuration";
import { SecurityMonitoringRuleNewValueOptionsLearningMethod } from "./SecurityMonitoringRuleNewValueOptionsLearningMethod";
import { SecurityMonitoringRuleNewValueOptionsLearningThreshold } from "./SecurityMonitoringRuleNewValueOptionsLearningThreshold";

/**
 * Options on new value detection method.
 */
export class SecurityMonitoringRuleNewValueOptions {
  /**
   * The duration in days after which a learned value is forgotten.
   */
  "forgetAfter"?: SecurityMonitoringRuleNewValueOptionsForgetAfter;
  /**
   * When set to true, Datadog uses previous values that fall within the defined learning window to construct the baseline, enabling the system to establish an accurate baseline more rapidly rather than relying solely on gradual learning over time.
   */
  "instantaneousBaseline"?: boolean;
  /**
   * The duration in days during which values are learned, and after which signals will be generated for values that
   * weren't learned. If set to 0, a signal will be generated for all new values after the first value is learned.
   */
  "learningDuration"?: SecurityMonitoringRuleNewValueOptionsLearningDuration;
  /**
   * The learning method used to determine when signals should be generated for values that weren't learned.
   */
  "learningMethod"?: SecurityMonitoringRuleNewValueOptionsLearningMethod;
  /**
   * A number of occurrences after which signals will be generated for values that weren't learned.
   */
  "learningThreshold"?: SecurityMonitoringRuleNewValueOptionsLearningThreshold;
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
    forgetAfter: {
      baseName: "forgetAfter",
      type: "SecurityMonitoringRuleNewValueOptionsForgetAfter",
      format: "int32",
    },
    instantaneousBaseline: {
      baseName: "instantaneousBaseline",
      type: "boolean",
    },
    learningDuration: {
      baseName: "learningDuration",
      type: "SecurityMonitoringRuleNewValueOptionsLearningDuration",
      format: "int32",
    },
    learningMethod: {
      baseName: "learningMethod",
      type: "SecurityMonitoringRuleNewValueOptionsLearningMethod",
    },
    learningThreshold: {
      baseName: "learningThreshold",
      type: "SecurityMonitoringRuleNewValueOptionsLearningThreshold",
      format: "int32",
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
    return SecurityMonitoringRuleNewValueOptions.attributeTypeMap;
  }

  public constructor() {}
}
