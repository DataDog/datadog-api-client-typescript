/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringRuleNewValueOptionsForgetAfter } from "./SecurityMonitoringRuleNewValueOptionsForgetAfter";
import { SecurityMonitoringRuleNewValueOptionsLearningDuration } from "./SecurityMonitoringRuleNewValueOptionsLearningDuration";

import { AttributeTypeMap } from "../util";

/**
 * Options on new value rules.
 */
export class SecurityMonitoringRuleNewValueOptions {
  /**
   * The duration in days after which a learned value is forgotten.
   */
  "forgetAfter"?: SecurityMonitoringRuleNewValueOptionsForgetAfter;
  /**
   * The duration in days during which values are learned, and after which signals will be generated for values that
   * weren't learned. If set to 0, a signal will be generated for all new values after the first value is learned.
   */
  "learningDuration"?: SecurityMonitoringRuleNewValueOptionsLearningDuration;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    forgetAfter: {
      baseName: "forgetAfter",
      type: "SecurityMonitoringRuleNewValueOptionsForgetAfter",
      format: "int32",
    },
    learningDuration: {
      baseName: "learningDuration",
      type: "SecurityMonitoringRuleNewValueOptionsLearningDuration",
      format: "int32",
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
