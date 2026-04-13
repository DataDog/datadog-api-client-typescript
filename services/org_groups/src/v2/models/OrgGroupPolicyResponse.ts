import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OrgGroupPolicyData } from "./OrgGroupPolicyData";

/**
 * Response containing a single org group policy.
 */
export class OrgGroupPolicyResponse {
  /**
   * An org group policy resource.
   */
  "data": OrgGroupPolicyData;
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
      type: "OrgGroupPolicyData",
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
    return OrgGroupPolicyResponse.attributeTypeMap;
  }

  public constructor() {}
}
