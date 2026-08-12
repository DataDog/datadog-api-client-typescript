import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AgentTrigger } from "./AgentTrigger";

/**
 * Schema for an agent-based trigger.
 */
export class AgentTriggerWrapper {
  /**
   * Trigger a workflow from an agent via the MCP execute tool. Workflow can be executed from Bits Chat, Bits Agent Builder, Claude Code, Codex, Cursor, and any other coding agent using the Datadog MCP.
   */
  "agentTrigger": AgentTrigger;
  /**
   * Names of existing workflow steps that run first after a trigger fires.
   */
  "startStepNames"?: Array<string>;
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
    agentTrigger: {
      baseName: "agentTrigger",
      type: "AgentTrigger",
      required: true,
    },
    startStepNames: {
      baseName: "startStepNames",
      type: "Array<string>",
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
    return AgentTriggerWrapper.attributeTypeMap;
  }

  public constructor() {}
}
