import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringIntegrationConfigCrowdStrikeSecrets } from "./SecurityMonitoringIntegrationConfigCrowdStrikeSecrets";
import { SecurityMonitoringIntegrationTypeCrowdStrike } from "./SecurityMonitoringIntegrationTypeCrowdStrike";

/**
 * The attributes of a CrowdStrike entity context sync configuration to create.
 */
export class SecurityMonitoringCrowdStrikeIntegrationConfigCreateAttributes {
  /**
   * The domain associated with the external entity source.
   */
  "domain": string;
  /**
   * The source type for a CrowdStrike entity context sync.
   */
  "integrationType": SecurityMonitoringIntegrationTypeCrowdStrike;
  /**
   * The display name for the entity context sync configuration.
   */
  "name": string;
  /**
   * Credentials for a CrowdStrike entity context sync.
   */
  "secrets": SecurityMonitoringIntegrationConfigCrowdStrikeSecrets;
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
      type: "SecurityMonitoringIntegrationTypeCrowdStrike",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    secrets: {
      baseName: "secrets",
      type: "SecurityMonitoringIntegrationConfigCrowdStrikeSecrets",
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
    return SecurityMonitoringCrowdStrikeIntegrationConfigCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
