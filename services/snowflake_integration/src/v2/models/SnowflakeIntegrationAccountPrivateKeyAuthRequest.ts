import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SnowflakeIntegrationAccountPrivateKeyAuthType } from "./SnowflakeIntegrationAccountPrivateKeyAuthType";

/**
 * RSA key pair authentication, the only method Snowflake integration accounts support. Generate an RSA key pair and assign the public key to the Snowflake user named in `settings.username`. Because an update replaces this object entirely, every required field must be sent again on each update, even when only one of them is changing.
 */
export class SnowflakeIntegrationAccountPrivateKeyAuthRequest {
  /**
   * The authentication method type.
   */
  "authType": SnowflakeIntegrationAccountPrivateKeyAuthType;
  /**
   * The private key, in PEM format.
   */
  "privateKey": string;
  /**
   * Name that distinguishes this private key from other keys in Datadog.
   */
  "privateKeyName": string;
  /**
   * Passphrase that decrypts the private key. Provide it only when the key is encrypted. Because an update replaces the authentication object entirely, omitting it removes any stored passphrase, so an encrypted key must always be sent together with its passphrase.
   */
  "privateKeyPassphrase"?: string;
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
    privateKey: {
      baseName: "private_key",
      type: "string",
      required: true,
    },
    privateKeyName: {
      baseName: "private_key_name",
      type: "string",
      required: true,
    },
    privateKeyPassphrase: {
      baseName: "private_key_passphrase",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SnowflakeIntegrationAccountPrivateKeyAuthRequest.attributeTypeMap;
  }

  public constructor() {}
}
