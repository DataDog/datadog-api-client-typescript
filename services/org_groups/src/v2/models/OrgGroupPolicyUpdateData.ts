import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OrgGroupPolicyType } from "./OrgGroupPolicyType";
import { OrgGroupPolicyUpdateAttributes } from "./OrgGroupPolicyUpdateAttributes";

/**
 * Data for updating an org group policy.
 */
export class OrgGroupPolicyUpdateData {
  /**
   * Attributes for updating an org group policy.
   */
  "attributes": OrgGroupPolicyUpdateAttributes;
  /**
   * The ID of the policy.
   */
  "id": string;
  /**
   * Org group policies resource type.
   */
  "type": OrgGroupPolicyType;
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
    attributes: {
      baseName: "attributes",
      type: "OrgGroupPolicyUpdateAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "OrgGroupPolicyType",
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
    return OrgGroupPolicyUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
