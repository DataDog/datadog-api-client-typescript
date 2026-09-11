/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SnowflakeIntegrationAccountPrivateKeyAuthType } from "./SnowflakeIntegrationAccountPrivateKeyAuthType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Authentication configured on the Snowflake integration account.
 */
export class SnowflakeIntegrationAccountAuthenticationResponse {
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
    return SnowflakeIntegrationAccountAuthenticationResponse.attributeTypeMap;
  }

  public constructor() {}
}
