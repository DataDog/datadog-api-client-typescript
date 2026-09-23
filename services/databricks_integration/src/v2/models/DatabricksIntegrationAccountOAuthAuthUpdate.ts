import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DatabricksIntegrationAccountOAuthAuthType } from "./DatabricksIntegrationAccountOAuthAuthType";

/**
 * Databricks OAuth machine-to-machine authentication using a service principal. Only the fields provided are changed; omit `client_secret` to keep the stored one.
 */
export class DatabricksIntegrationAccountOAuthAuthUpdate {
  /**
   * The authentication method type.
   */
  "authType": DatabricksIntegrationAccountOAuthAuthType;
  /**
   * Microsoft Entra ID tenant of the service principal, for Azure Databricks workspaces. Omit it to keep the stored tenant, send `null` or an empty string to remove it, or send a value to replace it.
   */
  "azureTenantId"?: string;
  /**
   * Client ID of the Databricks service principal.
   */
  "clientId"?: string;
  /**
   * Secret of the Databricks service principal. Generate it under User management > Service principals > Credentials & secrets in Databricks.
   */
  "clientSecret"?: string;
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
      type: "DatabricksIntegrationAccountOAuthAuthType",
      required: true,
    },
    azureTenantId: {
      baseName: "azure_tenant_id",
      type: "string",
    },
    clientId: {
      baseName: "client_id",
      type: "string",
    },
    clientSecret: {
      baseName: "client_secret",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DatabricksIntegrationAccountOAuthAuthUpdate.attributeTypeMap;
  }

  public constructor() {}
}
