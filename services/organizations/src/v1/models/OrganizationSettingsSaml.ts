import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Set the boolean property enabled to enable or disable single sign on with SAML.
 * See the SAML documentation for more information about all SAML settings.
 */
export class OrganizationSettingsSaml {
  /**
   * Whether or not SAML is enabled for this organization.
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
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return OrganizationSettingsSaml.attributeTypeMap;
  }

  public constructor() {}
}
