import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringIntegrationType } from "./SecurityMonitoringIntegrationType";

/**
 * Fields to update on the entity context sync configuration. All fields are optional.
 */
export class SecurityMonitoringIntegrationConfigUpdateAttributes {
  /**
   * The new domain associated with the external entity source.
   */
  "domain"?: string;
  /**
   * Whether the entity context sync should be enabled.
   */
  "enabled"?: boolean;
  /**
   * The type of external source that provides entities to Cloud SIEM.
   */
  "integrationType"?: SecurityMonitoringIntegrationType;
  /**
   * The new display name for the entity context sync configuration.
   */
  "name"?: string;
  /**
   * The secrets used to authenticate against the external entity source. The accepted keys depend on the source type (for example, `admin_email` for Google Workspace).
   */
  "secrets"?: { [key: string]: any };
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
    },
    enabled: {
      baseName: "enabled",
      type: "boolean",
    },
    integrationType: {
      baseName: "integration_type",
      type: "SecurityMonitoringIntegrationType",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    secrets: {
      baseName: "secrets",
      type: "{ [key: string]: any; }",
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
    return SecurityMonitoringIntegrationConfigUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
