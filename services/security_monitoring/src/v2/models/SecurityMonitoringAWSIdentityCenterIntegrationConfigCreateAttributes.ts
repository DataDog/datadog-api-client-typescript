import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringIntegrationTypeAWSIdentityCenter } from "./SecurityMonitoringIntegrationTypeAWSIdentityCenter";

/**
 * The attributes of an AWS IAM Identity Center entity context sync configuration to create. The sync reads
 * the users that the AWS integration collects, so it doesn't require any secrets.
 */
export class SecurityMonitoringAWSIdentityCenterIntegrationConfigCreateAttributes {
  /**
   * The domain associated with the external entity source.
   */
  "domain": string;
  /**
   * The source type for an AWS IAM Identity Center entity context sync.
   */
  "integrationType": SecurityMonitoringIntegrationTypeAWSIdentityCenter;
  /**
   * The display name for the entity context sync configuration.
   */
  "name": string;
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
      type: "SecurityMonitoringIntegrationTypeAWSIdentityCenter",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
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
    return SecurityMonitoringAWSIdentityCenterIntegrationConfigCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
