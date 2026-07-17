import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Credentials for an Okta entity context sync.
 */
export class SecurityMonitoringIntegrationConfigOktaSecrets {
  /**
   * The Okta API token used to authenticate against the Okta API.
   */
  "apiToken": string;
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
    apiToken: {
      baseName: "api_token",
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
    return SecurityMonitoringIntegrationConfigOktaSecrets.attributeTypeMap;
  }

  public constructor() {}
}
