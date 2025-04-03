import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Has one property enabled (boolean).
 */
export class OrganizationSettingsSamlIdpInitiatedLogin {
  /**
   * Whether SAML IdP initiated login is enabled, learn more
   * in the [SAML documentation](https://docs.datadoghq.com/account_management/saml/#idp-initiated-login).
   */
  "enabled"?: boolean;
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
    enabled: {
      baseName: "enabled",
      type: "boolean",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return OrganizationSettingsSamlIdpInitiatedLogin.attributeTypeMap;
  }

  public constructor() {}
}
