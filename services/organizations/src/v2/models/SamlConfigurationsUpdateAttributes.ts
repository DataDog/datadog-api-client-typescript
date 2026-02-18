import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes for updating SAML preferences.
 */
export class SamlConfigurationsUpdateAttributes {
  /**
   * List of role UUIDs to assign to JIT-provisioned users. Exactly 1 role is required.
   */
  "defaultRoleUuids": [string];
  /**
   * List of domains for Just-In-Time user provisioning. Maximum 50 domains.
   * Each domain must be between 1 and 256 characters.
   */
  "jitDomains": Array<string>;
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
    defaultRoleUuids: {
      baseName: "default_role_uuids",
      type: "[string]",
      required: true,
      format: "uuid",
    },
    jitDomains: {
      baseName: "jit_domains",
      type: "Array<string>",
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
    return SamlConfigurationsUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
