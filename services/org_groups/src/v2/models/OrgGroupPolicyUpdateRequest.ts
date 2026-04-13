import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OrgGroupPolicyUpdateData } from "./OrgGroupPolicyUpdateData";

/**
 * Request to update an org group policy.
 */
export class OrgGroupPolicyUpdateRequest {
  /**
   * Data for updating an org group policy.
   */
  "data": OrgGroupPolicyUpdateData;
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
      type: "OrgGroupPolicyUpdateData",
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
    return OrgGroupPolicyUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
