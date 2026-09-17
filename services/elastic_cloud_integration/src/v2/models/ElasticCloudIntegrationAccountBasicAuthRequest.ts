import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ElasticCloudIntegrationAccountBasicAuthType } from "./ElasticCloudIntegrationAccountBasicAuthType";

/**
 * Username and password authentication.
 */
export class ElasticCloudIntegrationAccountBasicAuthRequest {
  /**
   * The authentication method type.
   */
  "authType": ElasticCloudIntegrationAccountBasicAuthType;
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
      type: "ElasticCloudIntegrationAccountBasicAuthType",
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
    return ElasticCloudIntegrationAccountBasicAuthRequest.attributeTypeMap;
  }

  public constructor() {}
}
