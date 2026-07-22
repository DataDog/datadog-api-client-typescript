import { AttributeTypeMap } from "@datadog/datadog-api-client";


/**
 * Attributes for updating an organization's SAML preferences.
 */
export class OrgSAMLPreferencesAttributes {
  /**
   * The UUID of the default role assigned to just-in-time provisioned users.
   * Exactly one role UUID must be provided.
   */
  "defaultRoleUuids": [string];
  /**
   * Email domains for which users are automatically provisioned on first SAML login
   * (just-in-time provisioning).
   */
  "jitDomains": Array<string>;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
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
    return OrgSAMLPreferencesAttributes.attributeTypeMap;
  }

  public constructor() {}
}
