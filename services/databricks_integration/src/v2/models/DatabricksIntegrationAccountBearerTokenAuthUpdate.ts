import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DatabricksIntegrationAccountBearerTokenAuthType } from "./DatabricksIntegrationAccountBearerTokenAuthType";

/**
 * Bearer token authentication. The credential is a single opaque secret, a Databricks personal access token, with no accompanying non-secret identifier. The method is deprecated: Databricks accepts it only on accounts that already use it, and never on creation. Only the fields provided are changed; omit `token` to keep the stored one.
 */
export class DatabricksIntegrationAccountBearerTokenAuthUpdate {
  /**
   * The authentication method type.
   */
  "authType": DatabricksIntegrationAccountBearerTokenAuthType;
  /**
   * Secret token used to authenticate with Databricks.
   */
  "token"?: string;
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
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DatabricksIntegrationAccountBearerTokenAuthUpdate.attributeTypeMap;
  }

  public constructor() {}
}
