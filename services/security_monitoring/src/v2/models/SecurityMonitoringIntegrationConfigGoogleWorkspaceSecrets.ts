import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringIntegrationConfigGoogleWorkspaceServiceAccount } from "./SecurityMonitoringIntegrationConfigGoogleWorkspaceServiceAccount";

/**
 * Credentials for a Google Workspace entity context sync.
 */
export class SecurityMonitoringIntegrationConfigGoogleWorkspaceSecrets {
  /**
   * The admin email to impersonate for domain-wide delegation.
   */
  "adminEmail"?: string;
  /**
   * The Google Cloud service account JSON used to authenticate against the Google Workspace Admin SDK. Additional keys beyond those documented are preserved.
   */
  "serviceAccountJson": SecurityMonitoringIntegrationConfigGoogleWorkspaceServiceAccount;
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
    adminEmail: {
      baseName: "admin_email",
      type: "string",
    },
    serviceAccountJson: {
      baseName: "service_account_json",
      type: "SecurityMonitoringIntegrationConfigGoogleWorkspaceServiceAccount",
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
    return SecurityMonitoringIntegrationConfigGoogleWorkspaceSecrets.attributeTypeMap;
  }

  public constructor() {}
}
