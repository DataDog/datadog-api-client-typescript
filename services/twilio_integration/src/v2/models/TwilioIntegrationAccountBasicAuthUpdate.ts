import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TwilioIntegrationAccountBasicAuthType } from "./TwilioIntegrationAccountBasicAuthType";

/**
 * Username and password authentication. Only the fields provided are changed; omit `password` to keep the stored one.
 */
export class TwilioIntegrationAccountBasicAuthUpdate {
  /**
   * The authentication method type.
   */
  "authType": TwilioIntegrationAccountBasicAuthType;
  /**
   * Secret password or private key.
   */
  "password"?: string;
  /**
   * Non-secret username or public identifier for the credential pair.
   */
  "username"?: string;
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
    },
    username: {
      baseName: "username",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TwilioIntegrationAccountBasicAuthUpdate.attributeTypeMap;
  }

  public constructor() {}
}
