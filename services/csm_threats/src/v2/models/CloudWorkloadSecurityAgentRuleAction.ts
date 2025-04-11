import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CloudWorkloadSecurityAgentRuleKill } from "./CloudWorkloadSecurityAgentRuleKill";

/**
 * The action the rule can perform if triggered.
 */
export class CloudWorkloadSecurityAgentRuleAction {
  /**
   * SECL expression used to target the container to apply the action on
   */
  "filter"?: string;
  /**
   * Kill system call applied on the container matching the rule
   */
  "kill"?: CloudWorkloadSecurityAgentRuleKill;
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
    filter: {
      baseName: "filter",
      type: "string",
    },
    kill: {
      baseName: "kill",
      type: "CloudWorkloadSecurityAgentRuleKill",
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
    return CloudWorkloadSecurityAgentRuleAction.attributeTypeMap;
  }

  public constructor() {}
}
