import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ElasticCloudIntegrationAccountBasicAuthType } from "./ElasticCloudIntegrationAccountBasicAuthType";

/**
 * The basic authentication method and username configured on the account.
 */
export class ElasticCloudIntegrationAccountBasicAuthResponse {
  /**
   * The authentication method type.
   */
  "authType": ElasticCloudIntegrationAccountBasicAuthType;
  /**
   * Non-secret username or public identifier for the credential pair.
   */
  "username": string;
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
      type: "ElasticCloudIntegrationAccountBasicAuthType",
      required: true,
    },
    username: {
      baseName: "username",
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
    return ElasticCloudIntegrationAccountBasicAuthResponse.attributeTypeMap;
  }

  public constructor() {}
}
