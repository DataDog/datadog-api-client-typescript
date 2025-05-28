/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GCPMetricNamespaceConfig } from "./GCPMetricNamespaceConfig";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Attributes associated with your service account.
*/
export class GCPSTSServiceAccountAttributes {
  /**
   * Tags to be associated with GCP metrics and service checks from your account.
  */
  "accountTags"?: Array<string>;
  /**
   * Silence monitors for expected GCE instance shutdowns.
  */
  "automute"?: boolean;
  /**
   * Your service account email address.
  */
  "clientEmail"?: string;
  /**
   * List of filters to limit the Cloud Run revisions that are pulled into Datadog by using tags.
   * Only Cloud Run revision resources that apply to specified filters are imported into Datadog.
  */
  "cloudRunRevisionFilters"?: Array<string>;
  /**
   * Your Host Filters.
  */
  "hostFilters"?: Array<string>;
  /**
   * When enabled, Datadog will activate the Cloud Security Monitoring product for this service account. Note: This requires resource_collection_enabled to be set to true.
  */
  "isCspmEnabled"?: boolean;
  /**
   * When enabled, Datadog applies the `X-Goog-User-Project` header, attributing Google Cloud billing and quota usage to the project being monitored rather than the default service account project.
  */
  "isPerProjectQuotaEnabled"?: boolean;
  /**
   * When enabled, Datadog scans for all resource change data in your Google Cloud environment.
  */
  "isResourceChangeCollectionEnabled"?: boolean;
  /**
   * When enabled, Datadog will attempt to collect Security Command Center Findings. Note: This requires additional permissions on the service account.
  */
  "isSecurityCommandCenterEnabled"?: boolean;
  /**
   * Configurations for GCP metric namespaces.
  */
  "metricNamespaceConfigs"?: Array<GCPMetricNamespaceConfig>;
  /**
   * When enabled, Datadog scans for all resources in your GCP environment.
  */
  "resourceCollectionEnabled"?: boolean;

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
    "accountTags": {
      "baseName": "account_tags",
      "type": "Array<string>",
    },
    "automute": {
      "baseName": "automute",
      "type": "boolean",
    },
    "clientEmail": {
      "baseName": "client_email",
      "type": "string",
    },
    "cloudRunRevisionFilters": {
      "baseName": "cloud_run_revision_filters",
      "type": "Array<string>",
    },
    "hostFilters": {
      "baseName": "host_filters",
      "type": "Array<string>",
    },
    "isCspmEnabled": {
      "baseName": "is_cspm_enabled",
      "type": "boolean",
    },
    "isPerProjectQuotaEnabled": {
      "baseName": "is_per_project_quota_enabled",
      "type": "boolean",
    },
    "isResourceChangeCollectionEnabled": {
      "baseName": "is_resource_change_collection_enabled",
      "type": "boolean",
    },
    "isSecurityCommandCenterEnabled": {
      "baseName": "is_security_command_center_enabled",
      "type": "boolean",
    },
    "metricNamespaceConfigs": {
      "baseName": "metric_namespace_configs",
      "type": "Array<GCPMetricNamespaceConfig>",
    },
    "resourceCollectionEnabled": {
      "baseName": "resource_collection_enabled",
      "type": "boolean",
    },
    "additionalProperties": {
      "baseName": "additionalProperties",
      "type": "any",
    }
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {




    return GCPSTSServiceAccountAttributes.attributeTypeMap;

  }

  public constructor() {











  }
}









