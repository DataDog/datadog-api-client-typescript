import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DatabricksIntegrationAccountBearerTokenAuthType } from "./DatabricksIntegrationAccountBearerTokenAuthType";

/**
 * Bearer token authentication. The method is deprecated and the API rejects it on creation: Databricks accepts it only on accounts that already use it. It is present in the create union so that the method keeps the same shape across create, update and read; sending it on creation always fails. Use `databricks_oauth` or `private_action_runner` instead.
 */
export class DatabricksIntegrationAccountBearerTokenAuthRequest {
  /**
   * The authentication method type.
   */
  "authType": DatabricksIntegrationAccountBearerTokenAuthType;
  /**
   * Secret token used to authenticate with Databricks.
   */
  "token": string;
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
      type: "DatabricksIntegrationAccountBearerTokenAuthType",
      required: true,
    },
    token: {
      baseName: "token",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DatabricksIntegrationAccountBearerTokenAuthRequest.attributeTypeMap;
  }

  public constructor() {}
}
