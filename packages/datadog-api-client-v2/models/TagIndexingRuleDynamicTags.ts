/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Configuration for including dynamically queried tags.
 */
export class TagIndexingRuleDynamicTags {
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
