import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DatabricksIntegrationAccountPrivateActionRunnerAuthType } from "./DatabricksIntegrationAccountPrivateActionRunnerAuthType";

/**
 * Private Action Runner authentication. The runner holds the Databricks credentials, so this method carries no secrets.
 */
export class DatabricksIntegrationAccountPrivateActionRunnerAuthRequest {
  /**
   * The authentication method type.
   */
  "authType": DatabricksIntegrationAccountPrivateActionRunnerAuthType;
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
      type: "DatabricksIntegrationAccountPrivateActionRunnerAuthType",
      required: true,
    },
    connectionId: {
      baseName: "connection_id",
      type: "string",
      required: true,
      format: "uuid",
    },
    secretPath: {
      baseName: "secret_path",
      type: "string",
    },
    userUuid: {
      baseName: "user_uuid",
      type: "string",
      required: true,
      format: "uuid",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DatabricksIntegrationAccountPrivateActionRunnerAuthRequest.attributeTypeMap;
  }

  public constructor() {}
}
