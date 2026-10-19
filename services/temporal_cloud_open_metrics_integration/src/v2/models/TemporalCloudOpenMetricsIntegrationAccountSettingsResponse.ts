import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Settings configured on the Temporal Cloud OpenMetrics integration account.
 */
export class TemporalCloudOpenMetricsIntegrationAccountSettingsResponse {
  /**
   * When enabled, Datadog collects Temporal Cloud's [opt-in labels](https://docs.temporal.io/cloud/metrics/openmetrics/metrics-reference#opt-in-labels) (activity type, worker deployment name, and worker build ID) for more granularity on your existing metrics. Enabling them may increase metric collection latency.
   */
  "includeOptInLabels"?: boolean;
  /**
   * Comma-separated list of Temporal Cloud namespaces to collect metrics for. An entry can use `*` as a wildcard; for example, `prod-*` matches every namespace starting with `prod-`. Empty or absent when metrics are collected for all namespaces.
   */
  "namespacesToInclude"?: string;
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
    includeOptInLabels: {
      baseName: "include_opt_in_labels",
      type: "boolean",
    },
    namespacesToInclude: {
      baseName: "namespaces_to_include",
      type: "string",
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
    return TemporalCloudOpenMetricsIntegrationAccountSettingsResponse.attributeTypeMap;
  }

  public constructor() {}
}
