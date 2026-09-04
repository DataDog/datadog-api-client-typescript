import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IntegrationAccountPrivateActionRunnerAuthType } from "./IntegrationAccountPrivateActionRunnerAuthType";

/**
 * Private Action Runner authentication. The runner holds the credentials, so this method carries no secrets; `connection_id` and `user_uuid` must be provided on every submission.
 */
export class IntegrationAccountPrivateActionRunnerAuthRequest {
  /**
   * The authentication method type.
   */
  "authType": IntegrationAccountPrivateActionRunnerAuthType;
  /**
   * Unique identifier of the Private Action Runner connection holding the credentials.
   */
  "connectionId": string;
  /**
   * Path of the credential inside the secret backend configured on the runner.
   */
  "secretPath"?: string;
  /**
   * Unique identifier of the user the Private Action Runner connection belongs to.
   */
  "userUuid": string;
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
      type: "IntegrationAccountPrivateActionRunnerAuthType",
      required: true,
    },
    connectionId: {
      baseName: "connection_id",
      type: "string",
      required: true,
    },
    secretPath: {
      baseName: "secret_path",
      type: "string",
    },
    userUuid: {
      baseName: "user_uuid",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return IntegrationAccountPrivateActionRunnerAuthRequest.attributeTypeMap;
  }

  public constructor() {}
}
