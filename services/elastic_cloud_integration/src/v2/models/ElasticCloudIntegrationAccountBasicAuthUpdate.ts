import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ElasticCloudIntegrationAccountBasicAuthType } from "./ElasticCloudIntegrationAccountBasicAuthType";

/**
 * Username and password authentication. Only the fields provided are changed; omit `password` to keep the stored one.
 */
export class ElasticCloudIntegrationAccountBasicAuthUpdate {
  /**
   * The authentication method type.
   */
  "authType": ElasticCloudIntegrationAccountBasicAuthType;
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
      type: "ElasticCloudIntegrationAccountBasicAuthType",
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
    return ElasticCloudIntegrationAccountBasicAuthUpdate.attributeTypeMap;
  }

  public constructor() {}
}
