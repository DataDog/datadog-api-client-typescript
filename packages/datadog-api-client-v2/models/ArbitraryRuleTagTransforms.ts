/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ArbitraryRuleTagValueTransform } from "./ArbitraryRuleTagValueTransform";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Only supported for `proportional_timeseries` and `even_timeseries` rules. Applies tag key renames and tag value transforms to timeseries input rows after `mapping_transform`.
 */
export class ArbitraryRuleTagTransforms {
  /**
   * Map of source tag key to renamed tag key.
   */
  "tagKeyRename"?: { [key: string]: string };
  /**
   * Map of tag key to the transform applied to its values.
   */
  "tagValueTransforms"?: { [key: string]: ArbitraryRuleTagValueTransform };

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
    tagKeyRename: {
      baseName: "tag_key_rename",
      type: "{ [key: string]: string; }",
    },
    tagValueTransforms: {
      baseName: "tag_value_transforms",
      type: "{ [key: string]: ArbitraryRuleTagValueTransform; }",
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
    return ArbitraryRuleTagTransforms.attributeTypeMap;
  }

  public constructor() {}
}
