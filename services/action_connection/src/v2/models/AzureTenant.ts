import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AzureTenantType } from "./AzureTenantType";

/**
 * The definition of the `AzureTenant` object.
 */
export class AzureTenant {
  /**
   * The Client ID, also known as the Application ID in Azure, is a unique identifier for an application. It's used to identify the application during the authentication process. Your Application (client) ID is listed in the application's overview page. You can navigate to your application via the Azure Directory.
   */
  "appClientId": string;
  /**
   * The Client Secret is a confidential piece of information known only to the application and Azure AD. It's used to prove the application's identity. Your Client Secret is available from the application’s secrets page. You can navigate to your application via the Azure Directory.
   */
  "clientSecret": string;
  /**
   * If provided, the custom scope to be requested from Microsoft when acquiring an OAuth 2 access token. This custom scope is used only in conjunction with the HTTP action. A resource's scope is constructed by using the identifier URI for the resource and .default, separated by a forward slash (/) as follows:{identifierURI}/.default.
   */
  "customScopes"?: string;
  /**
   * The Tenant ID, also known as the Directory ID in Azure, is a unique identifier that represents an Azure AD instance. Your Tenant ID (Directory ID) is listed in your Active Directory overview page under the 'Tenant information' section.
   */
  "tenantId": string;
  /**
   * The definition of the `AzureTenant` object.
   */
  "type": AzureTenantType;
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
    appClientId: {
      baseName: "app_client_id",
      type: "string",
      required: true,
    },
    clientSecret: {
      baseName: "client_secret",
      type: "string",
      required: true,
    },
    customScopes: {
      baseName: "custom_scopes",
      type: "string",
    },
    tenantId: {
      baseName: "tenant_id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "AzureTenantType",
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
    return AzureTenant.attributeTypeMap;
  }

  public constructor() {}
}
