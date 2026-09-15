import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IntegrationAccountBasicAuthType } from "./IntegrationAccountBasicAuthType";

/**
 * Username and password authentication. Only the fields provided are changed; omit `password` to keep the stored one.
 */
export class IntegrationAccountBasicAuthUpdate {
  /**
   * The authentication method type.
   */
  "authType": IntegrationAccountBasicAuthType;
  /**
   * Secret password or private key.
   */
  "password"?: string;
  /**
   * Non-secret username or public identifier for the credential pair.
   */
  "username"?: string;
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
      type: "IntegrationAccountBasicAuthType",
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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return IntegrationAccountBasicAuthUpdate.attributeTypeMap;
  }

  public constructor() {}
}
