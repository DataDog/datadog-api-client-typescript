/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
