import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AutomationRuleActionData } from "./AutomationRuleActionData";
import { AutomationRuleActionType } from "./AutomationRuleActionType";

/**
 * Defines what happens when the rule triggers. Combines an action type with action-specific configuration data.
 */
export class AutomationRuleAction {
  /**
   * Configuration for the action to execute, dependent on the action type.
   */
  "data": AutomationRuleActionData;
  /**
   * The type of automated action to perform when the rule triggers. `EXECUTE_WORKFLOW` runs a Datadog workflow; `ASSIGN_AGENT` assigns an AI agent to the case.
   */
  "type": AutomationRuleActionType;
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
    data: {
      baseName: "data",
      type: "AutomationRuleActionData",
      required: true,
    },
    type: {
      baseName: "type",
      type: "AutomationRuleActionType",
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
    return AutomationRuleAction.attributeTypeMap;
  }

  public constructor() {}
}
