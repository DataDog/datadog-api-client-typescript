import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringIntegrationConfigGoogleWorkspaceSecrets } from "./SecurityMonitoringIntegrationConfigGoogleWorkspaceSecrets";
import { SecurityMonitoringIntegrationTypeGoogleWorkspace } from "./SecurityMonitoringIntegrationTypeGoogleWorkspace";

/**
 * Fields to update on a Google Workspace entity context sync configuration.
 */
export class SecurityMonitoringGoogleWorkspaceIntegrationConfigUpdateAttributes {
  /**
   * The new domain associated with the external entity source.
   */
  "domain"?: string;
  /**
   * Whether the entity context sync should be enabled.
   */
  "enabled"?: boolean;
  /**
   * The source type for a Google Workspace entity context sync.
   */
  "integrationType": SecurityMonitoringIntegrationTypeGoogleWorkspace;
  /**
   * The new display name for the entity context sync configuration.
   */
  "name"?: string;
  /**
   * Credentials for a Google Workspace entity context sync.
   */
  "secrets"?: SecurityMonitoringIntegrationConfigGoogleWorkspaceSecrets;
  /**
   * Free-form, non-sensitive settings for the entity context sync. The accepted keys depend on the source type.
   */
  "settings"?: { [key: string]: any; };
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
    domain: {
      baseName: "domain",
      type: "string",
    },
    enabled: {
      baseName: "enabled",
      type: "boolean",
    },
    integrationType: {
      baseName: "integration_type",
      type: "SecurityMonitoringIntegrationTypeGoogleWorkspace",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
    },
    secrets: {
      baseName: "secrets",
      type: "SecurityMonitoringIntegrationConfigGoogleWorkspaceSecrets",
    },
    settings: {
      baseName: "settings",
      type: "{ [key: string]: any; }",
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
    return SecurityMonitoringGoogleWorkspaceIntegrationConfigUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
