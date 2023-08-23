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
   * Enable Cloud Security Management Misconfigurations for your organization.
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
   * Your Azure Active Directory ID.
   */
  "tenantName"?: string;

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
    tenantName: {
      baseName: "tenant_name",
      type: "string",
    },
  };
}
