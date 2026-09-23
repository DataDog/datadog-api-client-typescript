import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DatabricksIntegrationAccountPrivateActionRunnerAuthType } from "./DatabricksIntegrationAccountPrivateActionRunnerAuthType";

/**
 * Private Action Runner authentication. The runner holds the Databricks credentials, so this method carries no secrets. Only the fields provided are changed.
 */
export class DatabricksIntegrationAccountPrivateActionRunnerAuthUpdate {
  /**
   * The authentication method type.
   */
  "authType": DatabricksIntegrationAccountPrivateActionRunnerAuthType;
  /**
   * Unique identifier of the Private Action Runner connection holding the credentials.
   */
  "connectionId"?: string;
  /**
   * Path of the credential inside the secret backend configured on the runner. Omit it to keep the stored path, send `null` or an empty string to remove it, or send a value to replace it.
   */
  "secretPath"?: string;
  /**
   * Unique identifier of the user the Private Action Runner connection belongs to.
   */
  "userUuid"?: string;
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
      format: "uuid",
    },
    secretPath: {
      baseName: "secret_path",
      type: "string",
    },
    userUuid: {
      baseName: "user_uuid",
      type: "string",
      format: "uuid",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DatabricksIntegrationAccountPrivateActionRunnerAuthUpdate.attributeTypeMap;
  }

  public constructor() {}
}
