/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DatabricksIntegrationAccountOAuthAuthType } from "./DatabricksIntegrationAccountOAuthAuthType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
