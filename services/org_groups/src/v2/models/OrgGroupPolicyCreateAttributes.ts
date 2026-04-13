import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes for creating an org group policy.
 */
export class OrgGroupPolicyCreateAttributes {
  /**
   * The policy content as key-value pairs.
   */
  "content": { [key: string]: any };
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
      required: true,
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
    return OrgGroupPolicyCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
