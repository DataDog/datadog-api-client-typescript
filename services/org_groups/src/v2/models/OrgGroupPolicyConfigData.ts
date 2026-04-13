import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OrgGroupPolicyConfigAttributes } from "./OrgGroupPolicyConfigAttributes";
import { OrgGroupPolicyConfigType } from "./OrgGroupPolicyConfigType";

/**
 * An org group policy config resource.
 */
export class OrgGroupPolicyConfigData {
  /**
   * Attributes of an org group policy config.
   */
  "attributes": OrgGroupPolicyConfigAttributes;
  /**
   * The identifier of the policy config (uses the config name).
   */
  "id": string;
  /**
   * Org group policy configs resource type.
   */
  "type": OrgGroupPolicyConfigType;
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
      type: "OrgGroupPolicyConfigAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "OrgGroupPolicyConfigType",
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
    return OrgGroupPolicyConfigData.attributeTypeMap;
  }

  public constructor() {}
}
