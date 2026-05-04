/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Azure settings for the storage account and container with inventory data.
 */
export class CloudInventorySyncConfigAzureRequestAttributes {
  /**
   * Azure AD application (client) ID used for access.
   */
  "clientId": string;
  /**
   * Blob container name.
   */
  "container": string;
  /**
   * Resource group containing the storage account.
   */
  "resourceGroup": string;
  /**
   * Storage account name.
   */
  "storageAccount": string;
  /**
   * Azure subscription ID.
   */
  "subscriptionId": string;
  /**
   * Azure AD tenant ID.
   */
  "tenantId": string;

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
    clientId: {
      baseName: "client_id",
      type: "string",
      required: true,
    },
    container: {
      baseName: "container",
      type: "string",
      required: true,
    },
    resourceGroup: {
      baseName: "resource_group",
      type: "string",
      required: true,
    },
    storageAccount: {
      baseName: "storage_account",
      type: "string",
      required: true,
    },
    subscriptionId: {
      baseName: "subscription_id",
      type: "string",
      required: true,
    },
    tenantId: {
      baseName: "tenant_id",
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
    return CloudInventorySyncConfigAzureRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
