import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CloudWorkloadSecurityAgentPolicyUpdateData } from "./CloudWorkloadSecurityAgentPolicyUpdateData";

/**
 * Request object that includes the Agent policy with the attributes to update
 */
export class CloudWorkloadSecurityAgentPolicyUpdateRequest {
  /**
   * Object for a single Agent policy
   */
  "data": CloudWorkloadSecurityAgentPolicyUpdateData;
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
      type: "CloudWorkloadSecurityAgentPolicyUpdateData",
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
    return CloudWorkloadSecurityAgentPolicyUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
