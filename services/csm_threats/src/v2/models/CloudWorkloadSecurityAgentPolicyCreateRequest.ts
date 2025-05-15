import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CloudWorkloadSecurityAgentPolicyCreateData } from "./CloudWorkloadSecurityAgentPolicyCreateData";

/**
 * Request object that includes the Agent policy to create
 */
export class CloudWorkloadSecurityAgentPolicyCreateRequest {
  /**
   * Object for a single Agent rule
   */
  "data": CloudWorkloadSecurityAgentPolicyCreateData;
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
      type: "CloudWorkloadSecurityAgentPolicyCreateData",
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
    return CloudWorkloadSecurityAgentPolicyCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
