import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SnowflakeIntegrationAccountPrivateKeyAuthType } from "./SnowflakeIntegrationAccountPrivateKeyAuthType";

/**
 * The RSA key pair authentication method configured on the account.
 */
export class SnowflakeIntegrationAccountPrivateKeyAuthResponse {
  /**
   * The authentication method type.
   */
  "authType": SnowflakeIntegrationAccountPrivateKeyAuthType;
  /**
   * Name that distinguishes this private key from other keys in Datadog.
   */
  "privateKeyName": string;
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
    authType: {
      baseName: "auth_type",
      type: "SnowflakeIntegrationAccountPrivateKeyAuthType",
      required: true,
    },
    privateKeyName: {
      baseName: "private_key_name",
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
    return SnowflakeIntegrationAccountPrivateKeyAuthResponse.attributeTypeMap;
  }

  public constructor() {}
}
