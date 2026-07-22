import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringIntegrationConfigSentinelOneSecrets } from "./SecurityMonitoringIntegrationConfigSentinelOneSecrets";
import { SecurityMonitoringIntegrationTypeSentinelOne } from "./SecurityMonitoringIntegrationTypeSentinelOne";

/**
 * Fields to update on a SentinelOne entity context sync configuration.
 */
export class SecurityMonitoringSentinelOneIntegrationConfigUpdateAttributes {
  /**
   * The new domain associated with the external entity source.
   */
  "domain"?: string;
  /**
   * Whether the entity context sync should be enabled.
   */
  "enabled"?: boolean;
  /**
   * The source type for a SentinelOne entity context sync.
   */
  "integrationType": SecurityMonitoringIntegrationTypeSentinelOne;
  /**
   * The new display name for the entity context sync configuration.
   */
  "name"?: string;
  /**
   * Credentials for a SentinelOne entity context sync.
   */
  "secrets"?: SecurityMonitoringIntegrationConfigSentinelOneSecrets;
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
      type: "SecurityMonitoringIntegrationTypeSentinelOne",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
    },
    secrets: {
      baseName: "secrets",
      type: "SecurityMonitoringIntegrationConfigSentinelOneSecrets",
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
    return SecurityMonitoringSentinelOneIntegrationConfigUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
