import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CloudWorkloadSecurityAgentRuleType } from "./CloudWorkloadSecurityAgentRuleType";
import { CloudWorkloadSecurityAgentRuleUpdateAttributes } from "./CloudWorkloadSecurityAgentRuleUpdateAttributes";

/**
 * Object for a single Agent rule.
 */
export class CloudWorkloadSecurityAgentRuleUpdateData {
  /**
   * Update an existing Cloud Workload Security Agent rule.
   */
  "attributes": CloudWorkloadSecurityAgentRuleUpdateAttributes;
  /**
   * The ID of the agent rule.
   */
  "id"?: string;
  /**
   * The type of the resource. The value should always be `agent_rule`.
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
      type: "CloudWorkloadSecurityAgentRuleUpdateAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
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
    return CloudWorkloadSecurityAgentRuleUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
