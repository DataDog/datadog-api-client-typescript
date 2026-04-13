import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes of an org group policy.
 */
export class OrgGroupPolicyAttributes {
  /**
   * The policy content as key-value pairs.
   */
  "content"?: { [key: string]: any };
  /**
   * Timestamp when the policy was enforced.
   */
  "enforcedAt": Date;
  /**
   * Timestamp when the policy was last modified.
   */
  "modifiedAt": Date;
  /**
   * The name of the policy.
   */
  "policyName": string;
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
    content: {
      baseName: "content",
      type: "{ [key: string]: any; }",
    },
    enforcedAt: {
      baseName: "enforced_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    modifiedAt: {
      baseName: "modified_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    policyName: {
      baseName: "policy_name",
      type: "string",
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
    return OrgGroupPolicyAttributes.attributeTypeMap;
  }

  public constructor() {}
}
