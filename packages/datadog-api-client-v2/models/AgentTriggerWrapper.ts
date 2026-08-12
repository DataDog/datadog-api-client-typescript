/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AgentTrigger } from "./AgentTrigger";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
