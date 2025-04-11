import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringRuleCaseAction } from "./SecurityMonitoringRuleCaseAction";
import { SecurityMonitoringRuleSeverity } from "./SecurityMonitoringRuleSeverity";

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
    actions: {
      baseName: "actions",
      type: "Array<SecurityMonitoringRuleCaseAction>",
    },
    condition: {
      baseName: "condition",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    notifications: {
      baseName: "notifications",
      type: "Array<string>",
    },
    status: {
      baseName: "status",
      type: "SecurityMonitoringRuleSeverity",
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
    return SecurityMonitoringRuleCase.attributeTypeMap;
  }

  public constructor() {}
}
