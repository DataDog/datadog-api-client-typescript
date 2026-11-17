/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Settings for updating the CoreWeave integration account. Only the fields provided are changed.
 */
export class CoreWeaveCloudIntegrationAccountSettingsUpdate {
  /**
   * Tags added to all metrics and logs collected from this CoreWeave account. Sending it replaces the whole list; send an empty array to remove all tags, or omit it to keep the stored list.
   */
  "accountTags"?: Array<string>;
  /**
   * Tag-filter rules limiting metric collection to matching clusters. Sending it replaces the whole list; send an empty array to remove all filters and collect every cluster, or omit it to keep the stored list. Include rules (`key:value`) are combined with OR, exclusion rules (`!key:value`) are then applied with AND, and `?` and `*` are wildcards.
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
    return CoreWeaveCloudIntegrationAccountSettingsUpdate.attributeTypeMap;
  }

  public constructor() {}
}
