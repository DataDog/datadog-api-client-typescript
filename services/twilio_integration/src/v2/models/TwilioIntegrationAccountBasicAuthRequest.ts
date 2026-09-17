import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TwilioIntegrationAccountBasicAuthType } from "./TwilioIntegrationAccountBasicAuthType";

/**
 * Username and password authentication.
 */
export class TwilioIntegrationAccountBasicAuthRequest {
  /**
   * The authentication method type.
   */
  "authType": TwilioIntegrationAccountBasicAuthType;
  /**
   * Secret password or private key.
   */
  "password": string;
  /**
   * Non-secret username or public identifier for the credential pair.
   */
  "username": string;
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
      type: "TwilioIntegrationAccountBasicAuthType",
      required: true,
    },
    password: {
      baseName: "password",
      type: "string",
      required: true,
    },
    username: {
      baseName: "username",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TwilioIntegrationAccountBasicAuthRequest.attributeTypeMap;
  }

  public constructor() {}
}
