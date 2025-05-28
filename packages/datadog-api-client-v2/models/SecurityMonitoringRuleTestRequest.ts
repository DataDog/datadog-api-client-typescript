/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringRuleQueryPayload } from "./SecurityMonitoringRuleQueryPayload";
import { SecurityMonitoringRuleTestPayload } from "./SecurityMonitoringRuleTestPayload";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Test the rule queries of a rule (rule property is ignored when applied to an existing rule)
*/
export class SecurityMonitoringRuleTestRequest {
  /**
   * Test a rule.
  */
  "rule"?: SecurityMonitoringRuleTestPayload;
  /**
   * Data payloads used to test rules query with the expected result.
  */
  "ruleQueryPayloads"?: Array<SecurityMonitoringRuleQueryPayload>;

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
    "rule": {
      "baseName": "rule",
      "type": "SecurityMonitoringRuleTestPayload",
    },
    "ruleQueryPayloads": {
      "baseName": "ruleQueryPayloads",
      "type": "Array<SecurityMonitoringRuleQueryPayload>",
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




    return SecurityMonitoringRuleTestRequest.attributeTypeMap;

  }

  public constructor() {











  }
}









