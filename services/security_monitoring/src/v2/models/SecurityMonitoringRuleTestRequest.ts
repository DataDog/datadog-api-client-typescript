import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringRuleQueryPayload } from "./SecurityMonitoringRuleQueryPayload";
import { SecurityMonitoringRuleTestPayload } from "./SecurityMonitoringRuleTestPayload";

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
    rule: {
      baseName: "rule",
      type: "SecurityMonitoringRuleTestPayload",
    },
    ruleQueryPayloads: {
      baseName: "ruleQueryPayloads",
      type: "Array<SecurityMonitoringRuleQueryPayload>",
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
    return SecurityMonitoringRuleTestRequest.attributeTypeMap;
  }

  public constructor() {}
}
