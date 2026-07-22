import { AttributeTypeMap } from "@datadog/datadog-api-client";


/**
 * Credentials for a CrowdStrike entity context sync.
 */
export class SecurityMonitoringIntegrationConfigCrowdStrikeSecrets {
  /**
   * The CrowdStrike API client ID.
   */
  "clientId": string;
  /**
   * The CrowdStrike API client secret.
   */
  "clientSecret": string;
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
    clientId: {
      baseName: "client_id",
      type: "string",
      required: true,
    },
    clientSecret: {
      baseName: "client_secret",
      type: "string",
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
    return SecurityMonitoringIntegrationConfigCrowdStrikeSecrets.attributeTypeMap;
  }

  public constructor() {}
}
