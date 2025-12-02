import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ApplicationSecurityPolicyUpdateData } from "./ApplicationSecurityPolicyUpdateData";

/**
 * Request object that includes the policy to update.
 */
export class ApplicationSecurityPolicyUpdateRequest {
  /**
   * Object for a single WAF policy.
   */
  "data": ApplicationSecurityPolicyUpdateData;
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
      type: "ApplicationSecurityPolicyUpdateData",
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
    return ApplicationSecurityPolicyUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
