/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { JoinType } from "./JoinType";
import { ListAugmentedQueryJoinConditionAugmentAttributeNormalization } from "./ListAugmentedQueryJoinConditionAugmentAttributeNormalization";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class ListAugmentedQueryJoinCondition {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "augmentAttribute": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "augmentAttributeNormalization"?: ListAugmentedQueryJoinConditionAugmentAttributeNormalization;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "baseAttribute": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "isNegated"?: boolean;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "joinType": JoinType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    augmentAttribute: {
      baseName: "augment_attribute",
      type: "string",
      required: true,
    },
    augmentAttributeNormalization: {
      baseName: "augment_attribute_normalization",
      type: "ListAugmentedQueryJoinConditionAugmentAttributeNormalization",
    },
    baseAttribute: {
      baseName: "base_attribute",
      type: "string",
      required: true,
    },
    isNegated: {
      baseName: "is_negated",
      type: "boolean",
    },
    joinType: {
      baseName: "join_type",
      type: "JoinType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ListAugmentedQueryJoinCondition.attributeTypeMap;
  }

  public constructor() {}
}
