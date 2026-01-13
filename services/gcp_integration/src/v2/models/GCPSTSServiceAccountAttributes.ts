import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GCPMetricNamespaceConfig } from "./GCPMetricNamespaceConfig";
import { GCPMonitoredResourceConfig } from "./GCPMonitoredResourceConfig";

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
   * **Note:** This field is deprecated. Instead, use `monitored_resource_configs` with `type=cloud_run_revision`
   */
  "cloudRunRevisionFilters"?: Array<string>;
  /**
   * List of filters to limit the VM instances that are pulled into Datadog by using tags.
   * Only VM instance resources that apply to specified filters are imported into Datadog.
   * **Note:** This field is deprecated. Instead, use `monitored_resource_configs` with `type=gce_instance`
   */
  "hostFilters"?: Array<string>;
  /**
   * When enabled, Datadog will activate the Cloud Security Monitoring product for this service account. Note: This requires resource_collection_enabled to be set to true.
   */
  "isCspmEnabled"?: boolean;
  /**
   * When enabled, Datadog collects metrics where location is explicitly stated as "global" or where location information cannot be deduced from GCP labels.
   */
  "isGlobalLocationEnabled"?: boolean;
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
   * Configurations for GCP monitored resources.
   */
  "monitoredResourceConfigs"?: Array<GCPMonitoredResourceConfig>;
  /**
   * Configurations for GCP location filtering, such as region, multi-region, or zone. Only monitored resources that match the specified regions are imported into Datadog. By default, Datadog collects from all locations.
   */
  "regionFilterConfigs"?: Array<string>;
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
    accountTags: {
      baseName: "account_tags",
      type: "Array<string>",
    },
    automute: {
      baseName: "automute",
      type: "boolean",
    },
    clientEmail: {
      baseName: "client_email",
      type: "string",
    },
    cloudRunRevisionFilters: {
      baseName: "cloud_run_revision_filters",
      type: "Array<string>",
    },
    hostFilters: {
      baseName: "host_filters",
      type: "Array<string>",
    },
    isCspmEnabled: {
      baseName: "is_cspm_enabled",
      type: "boolean",
    },
    isGlobalLocationEnabled: {
      baseName: "is_global_location_enabled",
      type: "boolean",
    },
    isPerProjectQuotaEnabled: {
      baseName: "is_per_project_quota_enabled",
      type: "boolean",
    },
    isResourceChangeCollectionEnabled: {
      baseName: "is_resource_change_collection_enabled",
      type: "boolean",
    },
    isSecurityCommandCenterEnabled: {
      baseName: "is_security_command_center_enabled",
      type: "boolean",
    },
    metricNamespaceConfigs: {
      baseName: "metric_namespace_configs",
      type: "Array<GCPMetricNamespaceConfig>",
    },
    monitoredResourceConfigs: {
      baseName: "monitored_resource_configs",
      type: "Array<GCPMonitoredResourceConfig>",
    },
    regionFilterConfigs: {
      baseName: "region_filter_configs",
      type: "Array<string>",
    },
    resourceCollectionEnabled: {
      baseName: "resource_collection_enabled",
      type: "boolean",
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
    return GCPSTSServiceAccountAttributes.attributeTypeMap;
  }

  public constructor() {}
}
