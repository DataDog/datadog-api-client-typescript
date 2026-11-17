/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Settings for creating the CoreWeave integration account.
 */
export class CoreWeaveCloudIntegrationAccountSettingsRequest {
  /**
   * Tags added to all metrics and logs collected from this CoreWeave account. Defaults to no tags.
   */
  "accountTags"?: Array<string>;
  /**
   * Tag-filter rules limiting metric collection to matching clusters, for cost savings. Include rules (`key:value`) are combined with OR, exclusion rules (`!key:value`) are then applied with AND, and `?` and `*` are wildcards; for example `cluster:prod-*` collects only matching clusters and `!cluster:dev` excludes a cluster. Defaults to no filters: every cluster is collected. Only cluster-scoped metrics are filtered; billing and object storage metrics are always collected.
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
    accountTags: {
      baseName: "account_tags",
      type: "Array<string>",
    },
    clusterFilters: {
      baseName: "cluster_filters",
      type: "Array<string>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CoreWeaveCloudIntegrationAccountSettingsRequest.attributeTypeMap;
  }

  public constructor() {}
}
