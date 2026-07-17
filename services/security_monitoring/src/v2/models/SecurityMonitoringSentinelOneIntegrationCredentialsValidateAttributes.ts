import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringIntegrationConfigSentinelOneSecrets } from "./SecurityMonitoringIntegrationConfigSentinelOneSecrets";
import { SecurityMonitoringIntegrationTypeSentinelOne } from "./SecurityMonitoringIntegrationTypeSentinelOne";

/**
 * The SentinelOne credentials to validate against the external entity source.
 */
export class SecurityMonitoringSentinelOneIntegrationCredentialsValidateAttributes {
  /**
   * The domain associated with the external entity source.
   */
  "domain": string;
  /**
   * The source type for a SentinelOne entity context sync.
   */
  "integrationType": SecurityMonitoringIntegrationTypeSentinelOne;
  /**
   * Credentials for a SentinelOne entity context sync.
   */
  "secrets": SecurityMonitoringIntegrationConfigSentinelOneSecrets;
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
      type: "SecurityMonitoringIntegrationTypeSentinelOne",
      required: true,
    },
    secrets: {
      baseName: "secrets",
      type: "SecurityMonitoringIntegrationConfigSentinelOneSecrets",
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
    return SecurityMonitoringSentinelOneIntegrationCredentialsValidateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
