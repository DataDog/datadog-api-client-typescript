import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CloudWorkloadSecurityAgentRuleUpdateData } from "./CloudWorkloadSecurityAgentRuleUpdateData";

/**
 * Request object that includes the Agent rule with the attributes to update.
 */
export class CloudWorkloadSecurityAgentRuleUpdateRequest {
  /**
   * Object for a single Agent rule.
   */
  "data": CloudWorkloadSecurityAgentRuleUpdateData;
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
      type: "CloudWorkloadSecurityAgentRuleUpdateData",
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
    return CloudWorkloadSecurityAgentRuleUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
