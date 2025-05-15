import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CloudWorkloadSecurityAgentPolicyData } from "./CloudWorkloadSecurityAgentPolicyData";

/**
 * Response object that includes a list of Agent policies
 */
export class CloudWorkloadSecurityAgentPoliciesListResponse {
  /**
   * A list of Agent policy objects
   */
  "data"?: Array<CloudWorkloadSecurityAgentPolicyData>;
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
      type: "Array<CloudWorkloadSecurityAgentPolicyData>",
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
    return CloudWorkloadSecurityAgentPoliciesListResponse.attributeTypeMap;
  }

  public constructor() {}
}
