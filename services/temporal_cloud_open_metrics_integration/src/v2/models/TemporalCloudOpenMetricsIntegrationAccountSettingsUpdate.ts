import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Settings for updating the Temporal Cloud OpenMetrics integration account. Only the fields provided are changed.
 */
export class TemporalCloudOpenMetricsIntegrationAccountSettingsUpdate {
  /**
   * When enabled, Datadog collects Temporal Cloud's [opt-in labels](https://docs.temporal.io/cloud/metrics/openmetrics/metrics-reference#opt-in-labels) (activity type, worker deployment name, and worker build ID) for more granularity on your existing metrics. Enabling them may increase metric collection latency.
   */
  "includeOptInLabels"?: boolean;
  /**
   * Comma-separated list of Temporal Cloud namespaces to collect metrics for. An entry can use `*` as a wildcard; for example, `prod-*` matches every namespace starting with `prod-`. Entries may contain only lowercase letters, digits, hyphens, periods and `*`; any other value is rejected with a `422` response. Omit it or leave it empty to collect metrics for all namespaces.
   */
  "namespacesToInclude"?: string;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    includeOptInLabels: {
      baseName: "include_opt_in_labels",
      type: "boolean",
    },
    namespacesToInclude: {
      baseName: "namespaces_to_include",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TemporalCloudOpenMetricsIntegrationAccountSettingsUpdate.attributeTypeMap;
  }

  public constructor() {}
}
