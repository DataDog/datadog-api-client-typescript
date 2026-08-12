import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TriggerRateLimit } from "./TriggerRateLimit";

/**
 * Trigger a workflow from an agent via the MCP execute tool. Workflow can be executed from Bits Chat, Bits Agent Builder, Claude Code, Codex, Cursor, and any other coding agent using the Datadog MCP.
 */
export class AgentTrigger {
  /**
   * Defines a rate limit for a trigger.
   */
  "rateLimit"?: TriggerRateLimit;
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
    rateLimit: {
      baseName: "rateLimit",
      type: "TriggerRateLimit",
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
    return AgentTrigger.attributeTypeMap;
  }

  public constructor() {}
}
