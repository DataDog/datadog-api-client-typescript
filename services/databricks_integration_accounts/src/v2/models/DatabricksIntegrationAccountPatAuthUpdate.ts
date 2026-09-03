import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DatabricksIntegrationAccountPatAuthType } from "./DatabricksIntegrationAccountPatAuthType";

/**
 * Databricks personal access token authentication. Deprecated: accepted only on accounts that already use it, and never on creation. Use `databricks-oauth` or `private-action-runner` instead. Omit `token` to keep the stored one.
 */
export class DatabricksIntegrationAccountPatAuthUpdate {
  /**
   * The authentication method type.
   */
  "authType": DatabricksIntegrationAccountPatAuthType;
  /**
   * Secret Databricks personal access token.
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
      type: "DatabricksIntegrationAccountPatAuthType",
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
    return DatabricksIntegrationAccountPatAuthUpdate.attributeTypeMap;
  }

  public constructor() {}
}
