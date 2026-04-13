import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OrgGroupPolicyOverrideUpdateData } from "./OrgGroupPolicyOverrideUpdateData";

/**
 * Request to update an org group policy override.
 */
export class OrgGroupPolicyOverrideUpdateRequest {
  /**
   * Data for updating a policy override.
   */
  "data": OrgGroupPolicyOverrideUpdateData;
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
      type: "OrgGroupPolicyOverrideUpdateData",
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
    return OrgGroupPolicyOverrideUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
