import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AutomationRuleAction } from "./AutomationRuleAction";
import { AutomationRuleTrigger } from "./AutomationRuleTrigger";
import { CaseAutomationRuleState } from "./CaseAutomationRuleState";

/**
 * Attributes required to create an automation rule.
 */
export class AutomationRuleCreateAttributes {
  /**
   * Defines what happens when the rule triggers. Combines an action type with action-specific configuration data.
   */
  "action": AutomationRuleAction;
  /**
   * Name of the automation rule.
   */
  "name": string;
  /**
   * Whether the automation rule is active. Enabled rules trigger on matching case events; disabled rules are inactive but preserve their configuration.
   */
  "state"?: CaseAutomationRuleState;
  /**
   * Defines when the rule activates. Combines a trigger type (the case event to listen for) with optional trigger data (conditions that narrow when the trigger fires).
   */
  "trigger": AutomationRuleTrigger;
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
    action: {
      baseName: "action",
      type: "AutomationRuleAction",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    state: {
      baseName: "state",
      type: "CaseAutomationRuleState",
    },
    trigger: {
      baseName: "trigger",
      type: "AutomationRuleTrigger",
      required: true,
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
    return AutomationRuleCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
