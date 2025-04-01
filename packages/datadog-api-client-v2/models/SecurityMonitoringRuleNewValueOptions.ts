/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringRuleNewValueOptionsForgetAfter } from "./SecurityMonitoringRuleNewValueOptionsForgetAfter";
import { SecurityMonitoringRuleNewValueOptionsLearningDuration } from "./SecurityMonitoringRuleNewValueOptionsLearningDuration";
import { SecurityMonitoringRuleNewValueOptionsLearningMethod } from "./SecurityMonitoringRuleNewValueOptionsLearningMethod";
import { SecurityMonitoringRuleNewValueOptionsLearningThreshold } from "./SecurityMonitoringRuleNewValueOptionsLearningThreshold";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Options on new value detection method.
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
    "forgetAfter": {
      "baseName": "forgetAfter",
      "type": "SecurityMonitoringRuleNewValueOptionsForgetAfter",
      "format": "int32",
    },
    "learningDuration": {
      "baseName": "learningDuration",
      "type": "SecurityMonitoringRuleNewValueOptionsLearningDuration",
      "format": "int32",
    },
    "learningMethod": {
      "baseName": "learningMethod",
      "type": "SecurityMonitoringRuleNewValueOptionsLearningMethod",
    },
    "learningThreshold": {
      "baseName": "learningThreshold",
      "type": "SecurityMonitoringRuleNewValueOptionsLearningThreshold",
      "format": "int32",
    },
    "additionalProperties": {
      "baseName": "additionalProperties",
      "type": "any",
    }
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {




    return SecurityMonitoringRuleNewValueOptions.attributeTypeMap;

  }

  public constructor() {











  }
}









