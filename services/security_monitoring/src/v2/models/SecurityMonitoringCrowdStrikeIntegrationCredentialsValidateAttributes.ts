import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringIntegrationConfigCrowdStrikeSecrets } from "./SecurityMonitoringIntegrationConfigCrowdStrikeSecrets";
import { SecurityMonitoringIntegrationTypeCrowdStrike } from "./SecurityMonitoringIntegrationTypeCrowdStrike";

/**
 * The CrowdStrike credentials to validate against the external entity source.
 */
export class SecurityMonitoringCrowdStrikeIntegrationCredentialsValidateAttributes {
  /**
   * The domain associated with the external entity source.
   */
  "domain": string;
  /**
   * The source type for a CrowdStrike entity context sync.
   */
  "integrationType": SecurityMonitoringIntegrationTypeCrowdStrike;
  /**
   * Credentials for a CrowdStrike entity context sync.
   */
  "secrets": SecurityMonitoringIntegrationConfigCrowdStrikeSecrets;
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
    secrets: {
      baseName: "secrets",
      type: "SecurityMonitoringIntegrationConfigCrowdStrikeSecrets",
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
    return SecurityMonitoringCrowdStrikeIntegrationCredentialsValidateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
