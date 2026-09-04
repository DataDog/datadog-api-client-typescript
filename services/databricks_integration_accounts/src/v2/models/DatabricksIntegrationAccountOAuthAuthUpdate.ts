import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DatabricksIntegrationAccountOAuthAuthType } from "./DatabricksIntegrationAccountOAuthAuthType";

/**
 * Databricks OAuth machine-to-machine authentication using a service principal. Omit `client_secret` to keep the stored one; `client_id` must be provided on every submission. Omitting `azure_tenant_id` clears it.
 */
export class DatabricksIntegrationAccountOAuthAuthUpdate {
  /**
   * The authentication method type.
   */
  "authType": DatabricksIntegrationAccountOAuthAuthType;
  /**
   * Microsoft Entra ID tenant of the service principal, for Azure Databricks workspaces.
   */
  "azureTenantId"?: string;
  /**
   * Client ID of the Databricks service principal.
   */
  "clientId": string;
  /**
   * Secret of the Databricks service principal.
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
      required: true,
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
