import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AccessRole } from "./AccessRole";
import { OrganizationSettingsSaml } from "./OrganizationSettingsSaml";
import { OrganizationSettingsSamlAutocreateUsersDomains } from "./OrganizationSettingsSamlAutocreateUsersDomains";
import { OrganizationSettingsSamlIdpInitiatedLogin } from "./OrganizationSettingsSamlIdpInitiatedLogin";
import { OrganizationSettingsSamlStrictMode } from "./OrganizationSettingsSamlStrictMode";

/**
 * A JSON array of settings.
 */
export class OrganizationSettings {
  /**
   * Whether or not the organization users can share widgets outside of Datadog.
   */
  "privateWidgetShare"?: boolean;
  /**
   * Set the boolean property enabled to enable or disable single sign on with SAML.
   * See the SAML documentation for more information about all SAML settings.
   */
  "saml"?: OrganizationSettingsSaml;
  /**
   * The access role of the user. Options are **st** (standard user), **adm** (admin user), or **ro** (read-only user).
   */
  "samlAutocreateAccessRole"?: AccessRole;
  /**
   * Has two properties, `enabled` (boolean) and `domains`, which is a list of domains without the @ symbol.
   */
  "samlAutocreateUsersDomains"?: OrganizationSettingsSamlAutocreateUsersDomains;
  /**
   * Whether or not SAML can be enabled for this organization.
   */
  "samlCanBeEnabled"?: boolean;
  /**
   * Identity provider endpoint for SAML authentication.
   */
  "samlIdpEndpoint"?: string;
  /**
   * Has one property enabled (boolean).
   */
  "samlIdpInitiatedLogin"?: OrganizationSettingsSamlIdpInitiatedLogin;
  /**
   * Whether or not a SAML identity provider metadata file was provided to the Datadog organization.
   */
  "samlIdpMetadataUploaded"?: boolean;
  /**
   * URL for SAML logging.
   */
  "samlLoginUrl"?: string;
  /**
   * Has one property enabled (boolean).
   */
  "samlStrictMode"?: OrganizationSettingsSamlStrictMode;
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
    privateWidgetShare: {
      baseName: "private_widget_share",
      type: "boolean",
    },
    saml: {
      baseName: "saml",
      type: "OrganizationSettingsSaml",
    },
    samlAutocreateAccessRole: {
      baseName: "saml_autocreate_access_role",
      type: "AccessRole",
    },
    samlAutocreateUsersDomains: {
      baseName: "saml_autocreate_users_domains",
      type: "OrganizationSettingsSamlAutocreateUsersDomains",
    },
    samlCanBeEnabled: {
      baseName: "saml_can_be_enabled",
      type: "boolean",
    },
    samlIdpEndpoint: {
      baseName: "saml_idp_endpoint",
      type: "string",
    },
    samlIdpInitiatedLogin: {
      baseName: "saml_idp_initiated_login",
      type: "OrganizationSettingsSamlIdpInitiatedLogin",
    },
    samlIdpMetadataUploaded: {
      baseName: "saml_idp_metadata_uploaded",
      type: "boolean",
    },
    samlLoginUrl: {
      baseName: "saml_login_url",
      type: "string",
    },
    samlStrictMode: {
      baseName: "saml_strict_mode",
      type: "OrganizationSettingsSamlStrictMode",
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
    return OrganizationSettings.attributeTypeMap;
  }

  public constructor() {}
}
