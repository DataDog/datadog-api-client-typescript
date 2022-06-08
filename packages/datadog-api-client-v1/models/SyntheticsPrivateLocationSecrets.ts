/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsPrivateLocationSecretsAuthentication } from "./SyntheticsPrivateLocationSecretsAuthentication";
import { SyntheticsPrivateLocationSecretsConfigDecryption } from "./SyntheticsPrivateLocationSecretsConfigDecryption";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
   * @ignore
   */
  "unparsedObject"?: any;

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
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SyntheticsPrivateLocationSecrets.attributeTypeMap;
  }

  public constructor() {}
}
