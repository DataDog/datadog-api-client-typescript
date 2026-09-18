import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SnowflakeIntegrationAccountPrivateKeyAuthType } from "./SnowflakeIntegrationAccountPrivateKeyAuthType";

/**
 * RSA key pair authentication, the only method Snowflake integration accounts support. Only the fields provided are changed; omit `private_key` to keep the stored one.
 */
export class SnowflakeIntegrationAccountPrivateKeyAuthUpdate {
  /**
   * The authentication method type.
   */
  "authType": SnowflakeIntegrationAccountPrivateKeyAuthType;
  /**
   * The private key, in PEM format.
   */
  "privateKey"?: string;
  /**
   * Name that distinguishes this private key from other keys in Datadog.
   */
  "privateKeyName"?: string;
  /**
   * Passphrase that decrypts the private key. Provide it only when the key is encrypted. Omit it to keep the stored passphrase, send `null` or an empty string to remove it, or send a value to replace it.
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
    },
    privateKeyName: {
      baseName: "private_key_name",
      type: "string",
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
    return SnowflakeIntegrationAccountPrivateKeyAuthUpdate.attributeTypeMap;
  }

  public constructor() {}
}
