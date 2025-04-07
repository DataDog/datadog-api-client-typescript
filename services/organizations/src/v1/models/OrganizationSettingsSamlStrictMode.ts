import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Has one property enabled (boolean).
 */
export class OrganizationSettingsSamlStrictMode {
  /**
   * Whether or not the SAML strict mode is enabled. If true, all users must log in with SAML.
   * Learn more on the [SAML Strict documentation](https://docs.datadoghq.com/account_management/saml/#saml-strict).
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
    return OrganizationSettingsSamlStrictMode.attributeTypeMap;
  }

  public constructor() {}
}
