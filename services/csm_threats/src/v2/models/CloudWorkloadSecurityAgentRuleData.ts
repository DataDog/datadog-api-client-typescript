import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CloudWorkloadSecurityAgentRuleAttributes } from "./CloudWorkloadSecurityAgentRuleAttributes";
import { CloudWorkloadSecurityAgentRuleType } from "./CloudWorkloadSecurityAgentRuleType";

/**
 * Object for a single Agent rule.
 */
export class CloudWorkloadSecurityAgentRuleData {
  /**
   * A Cloud Workload Security Agent rule returned by the API.
   */
  "attributes"?: CloudWorkloadSecurityAgentRuleAttributes;
  /**
   * The ID of the Agent rule.
   */
  "id"?: string;
  /**
   * The type of the resource. The value should always be `agent_rule`.
   */
  "type"?: CloudWorkloadSecurityAgentRuleType;
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
      type: "CloudWorkloadSecurityAgentRuleAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "CloudWorkloadSecurityAgentRuleType",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CloudWorkloadSecurityAgentRuleData.attributeTypeMap;
  }

  public constructor() {}
}
