import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Has two properties, `enabled` (boolean) and `domains`, which is a list of domains without the @ symbol.
 */
export class OrganizationSettingsSamlAutocreateUsersDomains {
  /**
   * List of domains where the SAML automated user creation is enabled.
   */
  "domains"?: Array<string>;
  /**
   * Whether or not the automated user creation based on SAML domain is enabled.
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
    domains: {
      baseName: "domains",
      type: "Array<string>",
    },
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
    return OrganizationSettingsSamlAutocreateUsersDomains.attributeTypeMap;
  }

  public constructor() {}
}
