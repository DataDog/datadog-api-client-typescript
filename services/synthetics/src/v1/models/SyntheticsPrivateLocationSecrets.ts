import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsPrivateLocationSecretsAuthentication } from "./SyntheticsPrivateLocationSecretsAuthentication";
import { SyntheticsPrivateLocationSecretsConfigDecryption } from "./SyntheticsPrivateLocationSecretsConfigDecryption";

/**
 * Secrets for the private location. Only present in the response when creating the private location.
 */
export class SyntheticsPrivateLocationSecrets {
  /**
   * Authentication part of the secrets.
   */
  "authentication"?: SyntheticsPrivateLocationSecretsAuthentication;
  /**
   * Private key for the private location.
   */
  "configDecryption"?: SyntheticsPrivateLocationSecretsConfigDecryption;
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
    authentication: {
      baseName: "authentication",
      type: "SyntheticsPrivateLocationSecretsAuthentication",
    },
    configDecryption: {
      baseName: "config_decryption",
      type: "SyntheticsPrivateLocationSecretsConfigDecryption",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SyntheticsPrivateLocationSecrets.attributeTypeMap;
  }

  public constructor() {}
}
