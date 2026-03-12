import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MonitorFormulaAndFunctionAggregateQueryJoinType } from "./MonitorFormulaAndFunctionAggregateQueryJoinType";

/**
 * Join condition for aggregate augmented queries.
 */
export class MonitorFormulaAndFunctionAggregateQueryJoinCondition {
  /**
   * Attribute from the augment query to join on.
   */
  "augmentAttribute": string;
  /**
   * Attribute from the base query to join on.
   */
  "baseAttribute": string;
  /**
   * Join type for aggregate query join conditions.
   */
  "joinType": MonitorFormulaAndFunctionAggregateQueryJoinType;
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
    baseAttribute: {
      baseName: "base_attribute",
      type: "string",
      required: true,
    },
    joinType: {
      baseName: "join_type",
      type: "MonitorFormulaAndFunctionAggregateQueryJoinType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MonitorFormulaAndFunctionAggregateQueryJoinCondition.attributeTypeMap;
  }

  public constructor() {}
}
