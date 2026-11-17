import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Configuration for metric collection. Only the fields provided are changed.
 */
export class NebiusCloudIntegrationAccountMetricsConfigUpdate {
  /**
   * Tag-filter rules limiting metric collection to matching Kubernetes clusters. Sending metrics_config replaces the stored object's cluster_filters list; omit it to keep the stored value. Include rules (`key:value`) are combined with OR, exclusion rules (`!key:value`) are then applied with AND, and `?` and `*` are wildcards.
   */
  "clusterFilters"?: Array<string>;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    clusterFilters: {
      baseName: "cluster_filters",
      type: "Array<string>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return NebiusCloudIntegrationAccountMetricsConfigUpdate.attributeTypeMap;
  }

  public constructor() {}
}
