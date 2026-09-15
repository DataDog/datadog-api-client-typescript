import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DatabricksIntegrationAccountOAuthAuthType } from "./DatabricksIntegrationAccountOAuthAuthType";

/**
 * The Databricks OAuth authentication method and service principal configured on the account.
 */
export class DatabricksIntegrationAccountOAuthAuthResponse {
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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DatabricksIntegrationAccountOAuthAuthResponse.attributeTypeMap;
  }

  public constructor() {}
}
