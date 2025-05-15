import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CloudWorkloadSecurityAgentRuleCreateAttributes } from "./CloudWorkloadSecurityAgentRuleCreateAttributes";
import { CloudWorkloadSecurityAgentRuleType } from "./CloudWorkloadSecurityAgentRuleType";

/**
 * Object for a single Agent rule
 */
export class CloudWorkloadSecurityAgentRuleCreateData {
  /**
   * Create a new Cloud Workload Security Agent rule.
   */
  "attributes": CloudWorkloadSecurityAgentRuleCreateAttributes;
  /**
   * The type of the resource, must always be `agent_rule`
   */
  "type": CloudWorkloadSecurityAgentRuleType;
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
    attributes: {
      baseName: "attributes",
      type: "CloudWorkloadSecurityAgentRuleCreateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "CloudWorkloadSecurityAgentRuleType",
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
    return CloudWorkloadSecurityAgentRuleCreateData.attributeTypeMap;
  }

  public constructor() {}
}
