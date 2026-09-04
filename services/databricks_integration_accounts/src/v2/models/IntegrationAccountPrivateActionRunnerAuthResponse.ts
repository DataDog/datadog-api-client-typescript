import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IntegrationAccountPrivateActionRunnerAuthType } from "./IntegrationAccountPrivateActionRunnerAuthType";

/**
 * The Private Action Runner authentication method configured on the account.
 */
export class IntegrationAccountPrivateActionRunnerAuthResponse {
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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return IntegrationAccountPrivateActionRunnerAuthResponse.attributeTypeMap;
  }

  public constructor() {}
}
