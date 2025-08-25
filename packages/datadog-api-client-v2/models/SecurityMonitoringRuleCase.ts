/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringRuleCaseAction } from "./SecurityMonitoringRuleCaseAction";
import { SecurityMonitoringRuleSeverity } from "./SecurityMonitoringRuleSeverity";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Case when signal is generated.
*/
export class SecurityMonitoringRuleCase {
  /**
   * Action to perform for each rule case.
  */
  "actions"?: Array<SecurityMonitoringRuleCaseAction>;
  /**
   * A rule case contains logical operations (`>`,`>=`, `&&`, `||`) to determine if a signal should be generated
   * based on the event counts in the previously defined queries.
  */
  "condition"?: string;
  /**
   * Severity of the Security Signal.
  */
  "customStatus"?: SecurityMonitoringRuleSeverity;
  /**
   * Name of the case.
  */
  "name"?: string;
  /**
   * Notification targets for each rule case.
  */
  "notifications"?: Array<string>;
  /**
   * Severity of the Security Signal.
  */
  "status"?: SecurityMonitoringRuleSeverity;

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
    "actions": {
      "baseName": "actions",
      "type": "Array<SecurityMonitoringRuleCaseAction>",
    },
    "condition": {
      "baseName": "condition",
      "type": "string",
    },
    "customStatus": {
      "baseName": "customStatus",
      "type": "SecurityMonitoringRuleSeverity",
    },
    "name": {
      "baseName": "name",
      "type": "string",
    },
    "notifications": {
      "baseName": "notifications",
      "type": "Array<string>",
    },
    "status": {
      "baseName": "status",
      "type": "SecurityMonitoringRuleSeverity",
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




    return SecurityMonitoringRuleCase.attributeTypeMap;

  }

  public constructor() {











  }
}









