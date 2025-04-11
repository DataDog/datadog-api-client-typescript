import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes object for updating an Okta account.
 */
export class OktaAccountUpdateRequestAttributes {
  /**
   * The API key of the Okta account.
   */
  "apiKey"?: string;
  /**
   * The authorization method for an Okta account.
   */
  "authMethod": string;
  /**
   * The Client ID of an Okta app integration.
   */
  "clientId"?: string;
  /**
   * The client secret of an Okta app integration.
   */
  "clientSecret"?: string;
  /**
   * The domain associated with an Okta account.
   */
  "domain": string;
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
    apiKey: {
      baseName: "api_key",
      type: "string",
    },
    authMethod: {
      baseName: "auth_method",
      type: "string",
      required: true,
    },
    clientId: {
      baseName: "client_id",
      type: "string",
    },
    clientSecret: {
      baseName: "client_secret",
      type: "string",
    },
    domain: {
      baseName: "domain",
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
    return OktaAccountUpdateRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
