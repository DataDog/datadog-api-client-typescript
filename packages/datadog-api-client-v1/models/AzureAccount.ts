/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

export class AzureAccount {
  /**
   * Your Azure web application ID.
   */
  "clientId"?: string;
  /**
   * Your Azure web application secret key.
   */
  "clientSecret"?: string;
  /**
   * Errors in your configuration.
   */
  "errors"?: Array<string>;
  /**
   * Limit the Azure instances that are pulled into Datadog by using tags. Only hosts that match one of the defined tags are imported into Datadog.
   */
  "hostFilters"?: string;
  /**
   * Your New Azure web application ID.
   */
  "newClientId"?: string;
  /**
   * Your New Azure Active Directory ID.
   */
  "newTenantName"?: string;
  /**
   * Your Azure Active Directory ID.
   */
  "tenantName"?: string;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: {
      baseName: string;
      type: string;
      required?: boolean;
      format?: string;
    };
  } = {
    clientId: {
      baseName: "client_id",
      type: "string",
    },
    clientSecret: {
      baseName: "client_secret",
      type: "string",
    },
    errors: {
      baseName: "errors",
      type: "Array<string>",
    },
    hostFilters: {
      baseName: "host_filters",
      type: "string",
    },
    newClientId: {
      baseName: "new_client_id",
      type: "string",
    },
    newTenantName: {
      baseName: "new_tenant_name",
      type: "string",
    },
    tenantName: {
      baseName: "tenant_name",
      type: "string",
    },
  };

  static getAttributeTypeMap() {
    return AzureAccount.attributeTypeMap;
  }

  public constructor() {}
}
