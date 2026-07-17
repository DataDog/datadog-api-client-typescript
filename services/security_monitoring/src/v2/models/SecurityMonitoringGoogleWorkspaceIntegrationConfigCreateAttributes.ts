import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringIntegrationConfigGoogleWorkspaceSecrets } from "./SecurityMonitoringIntegrationConfigGoogleWorkspaceSecrets";
import { SecurityMonitoringIntegrationTypeGoogleWorkspace } from "./SecurityMonitoringIntegrationTypeGoogleWorkspace";

/**
 * The attributes of a Google Workspace entity context sync configuration to create.
 */
export class SecurityMonitoringGoogleWorkspaceIntegrationConfigCreateAttributes {
  /**
   * The domain associated with the external entity source.
   */
  "domain": string;
  /**
   * The source type for a Google Workspace entity context sync.
   */
  "integrationType": SecurityMonitoringIntegrationTypeGoogleWorkspace;
  /**
   * The display name for the entity context sync configuration.
   */
  "name": string;
  /**
   * Credentials for a Google Workspace entity context sync.
   */
  "secrets": SecurityMonitoringIntegrationConfigGoogleWorkspaceSecrets;
  /**
   * Free-form, non-sensitive settings for the entity context sync. The accepted keys depend on the source type.
   */
  "settings"?: { [key: string]: any };
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
    domain: {
      baseName: "domain",
      type: "string",
      required: true,
    },
    integrationType: {
      baseName: "integration_type",
      type: "SecurityMonitoringIntegrationTypeGoogleWorkspace",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    secrets: {
      baseName: "secrets",
      type: "SecurityMonitoringIntegrationConfigGoogleWorkspaceSecrets",
      required: true,
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
    return SecurityMonitoringGoogleWorkspaceIntegrationConfigCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
