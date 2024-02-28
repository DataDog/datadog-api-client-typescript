/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Datadog-Azure integrations configured for your organization.
 */
export class AzureAccount {
  /**
   * Limit the Azure app service plans that are pulled into Datadog using tags.
   * Only app service plans that match one of the defined tags are imported into Datadog.
   */
  "appServicePlanFilters"?: string;
  /**
   * Silence monitors for expected Azure VM shutdowns.
   */
  "automute"?: boolean;
  /**
   * Your Azure web application ID.
   */
  "clientId"?: string;
  /**
   * Your Azure web application secret key.
   */
  "clientSecret"?: string;
  /**
   * Limit the Azure container apps that are pulled into Datadog using tags.
   * Only container apps that match one of the defined tags are imported into Datadog.
   */
  "containerAppFilters"?: string;
  /**
   * When enabled, Datadog’s Cloud Security Management product scans resource configurations monitored by this app registration.
   * Note: This requires resource_collection_enabled to be set to true.
   */
  "cspmEnabled"?: boolean;
  /**
   * Enable custom metrics for your organization.
   */
  "customMetricsEnabled"?: boolean;
  /**
   * Errors in your configuration.
   */
  "errors"?: Array<string>;
  /**
   * Limit the Azure instances that are pulled into Datadog by using tags.
   * Only hosts that match one of the defined tags are imported into Datadog.
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
   * When enabled, Datadog collects metadata and configuration info from cloud resources (compute instances, databases, load balancers, etc.) monitored by this app registration.
   */
  "resourceCollectionEnabled"?: boolean;
  /**
   * Your Azure Active Directory ID.
   */
  "tenantName"?: string;

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
    appServicePlanFilters: {
      baseName: "app_service_plan_filters",
      type: "string",
    },
    automute: {
      baseName: "automute",
      type: "boolean",
    },
    clientId: {
      baseName: "client_id",
      type: "string",
    },
    clientSecret: {
      baseName: "client_secret",
      type: "string",
    },
    containerAppFilters: {
      baseName: "container_app_filters",
      type: "string",
    },
    cspmEnabled: {
      baseName: "cspm_enabled",
      type: "boolean",
    },
    customMetricsEnabled: {
      baseName: "custom_metrics_enabled",
      type: "boolean",
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
    resourceCollectionEnabled: {
      baseName: "resource_collection_enabled",
      type: "boolean",
    },
    tenantName: {
      baseName: "tenant_name",
      type: "string",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AzureAccount.attributeTypeMap;
  }

  public constructor() {}
}
