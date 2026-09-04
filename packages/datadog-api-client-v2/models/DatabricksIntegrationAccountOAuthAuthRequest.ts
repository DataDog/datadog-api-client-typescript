/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DatabricksIntegrationAccountOAuthAuthType } from "./DatabricksIntegrationAccountOAuthAuthType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Databricks OAuth machine-to-machine authentication using a service principal.
 */
export class DatabricksIntegrationAccountOAuthAuthRequest {
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
  "clientSecret": string;

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
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DatabricksIntegrationAccountOAuthAuthRequest.attributeTypeMap;
  }

  public constructor() {}
}
