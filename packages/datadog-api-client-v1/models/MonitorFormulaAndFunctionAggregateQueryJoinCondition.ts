/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MonitorFormulaAndFunctionAggregateQueryJoinType } from "./MonitorFormulaAndFunctionAggregateQueryJoinType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
