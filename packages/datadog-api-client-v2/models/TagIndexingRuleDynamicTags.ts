/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Options for dynamic tag indexing applied per metric, such as tags filtered by query usage.
 *
 * Before a tag key is dropped by this rule, two grace period conditions must be met:
 *
 * 1. The metric must be submitted for at least as long as the selected window.
 * 2. A tag key must have been submitted for at least 15 days.
 *
 * Any metric or tag key that does not meet these conditions are excluded from this
 * indexing rule. The `exclude_not_*` fields require `exclude_tags_mode` to be set to `true`.
 */
export class TagIndexingRuleDynamicTags {
  /**
   * Tags that have not been queried within this window are excluded from indexing. Maximum of `7776000` (90 days).
   */
  "excludeNotQueriedWindowSeconds"?: number;
  /**
   * Tags not used in any dashboards,  monitors, notebooks, or SLOs are excluded from indexing.
   */
  "excludeNotUsedInAssets"?: boolean;
  /**
   * Window in seconds for evaluating queried tags.
   */
  "queriedTagsWindowSeconds"?: number;
  /**
   * When true, tags from related assets are included.
   */
  "relatedAssetTags"?: boolean;

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
    excludeNotQueriedWindowSeconds: {
      baseName: "exclude_not_queried_window_seconds",
      type: "number",
      format: "int64",
    },
    excludeNotUsedInAssets: {
      baseName: "exclude_not_used_in_assets",
      type: "boolean",
    },
    queriedTagsWindowSeconds: {
      baseName: "queried_tags_window_seconds",
      type: "number",
      format: "int64",
    },
    relatedAssetTags: {
      baseName: "related_asset_tags",
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
    return TagIndexingRuleDynamicTags.attributeTypeMap;
  }

  public constructor() {}
}
