import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OrgGroupPolicyOverrideCreateData } from "./OrgGroupPolicyOverrideCreateData";

/**
 * Request to create an org group policy override.
 */
export class OrgGroupPolicyOverrideCreateRequest {
  /**
   * Data for creating an org group policy override.
   */
  "data": OrgGroupPolicyOverrideCreateData;
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
      type: "OrgGroupPolicyOverrideCreateData",
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
    return OrgGroupPolicyOverrideCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
