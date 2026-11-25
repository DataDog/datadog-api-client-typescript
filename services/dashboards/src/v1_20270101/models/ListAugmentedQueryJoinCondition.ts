import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { JoinType } from "./JoinType";
import { ListAugmentedQueryJoinConditionAugmentAttributeNormalization } from "./ListAugmentedQueryJoinConditionAugmentAttributeNormalization";

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
