import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CloudWorkloadSecurityAgentRuleCreateData } from "./CloudWorkloadSecurityAgentRuleCreateData";

/**
 * Request object that includes the Agent rule to create.
 */
export class CloudWorkloadSecurityAgentRuleCreateRequest {
  /**
   * Object for a single Agent rule.
   */
  "data": CloudWorkloadSecurityAgentRuleCreateData;
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
      type: "CloudWorkloadSecurityAgentRuleCreateData",
      required: true,
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
    return CloudWorkloadSecurityAgentRuleCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
