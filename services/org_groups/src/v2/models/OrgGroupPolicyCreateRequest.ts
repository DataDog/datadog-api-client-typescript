import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OrgGroupPolicyCreateData } from "./OrgGroupPolicyCreateData";

/**
 * Request to create an org group policy.
 */
export class OrgGroupPolicyCreateRequest {
  /**
   * Data for creating an org group policy.
   */
  "data": OrgGroupPolicyCreateData;
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
      type: "OrgGroupPolicyCreateData",
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
    return OrgGroupPolicyCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
