import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Configuration for the action to execute, dependent on the action type.
 */
export class AutomationRuleActionData {
  /**
   * The type of AI agent to assign. Required when the action type is `assign_agent`.
   */
  "agentType"?: string;
  /**
   * The identifier of the AI agent to assign to the case. Required when the action type is `assign_agent`.
   */
  "assignedAgentId"?: string;
  /**
   * The handle of the Datadog workflow to execute. Required when the action type is `execute_workflow`.
   */
  "handle"?: string;
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
    agentType: {
      baseName: "agent_type",
      type: "string",
    },
    assignedAgentId: {
      baseName: "assigned_agent_id",
      type: "string",
    },
    handle: {
      baseName: "handle",
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
    return AutomationRuleActionData.attributeTypeMap;
  }

  public constructor() {}
}
