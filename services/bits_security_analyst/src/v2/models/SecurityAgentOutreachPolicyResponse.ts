import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityAgentOutreachPolicy } from "./SecurityAgentOutreachPolicy";

/**
 * Response with the organization's outreach policy.
 */
export class SecurityAgentOutreachPolicyResponse {
  /**
   * The organization's outreach policy.
   */
  "data": SecurityAgentOutreachPolicy;
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
      type: "SecurityAgentOutreachPolicy",
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
    return SecurityAgentOutreachPolicyResponse.attributeTypeMap;
  }

  public constructor() {}
}
