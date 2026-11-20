/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { StructuredAnalysisJoinCondition } from "./StructuredAnalysisJoinCondition";
import { StructuredAnalysisJoinJoinType } from "./StructuredAnalysisJoinJoinType";
import { StructuredAnalysisJoinType } from "./StructuredAnalysisJoinType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class StructuredAnalysisJoin {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "joinConditions": Array<StructuredAnalysisJoinCondition>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "joinType": StructuredAnalysisJoinJoinType;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "targetColumns": Array<string>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "targetDataset": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": StructuredAnalysisJoinType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    joinConditions: {
      baseName: "join_conditions",
      type: "Array<StructuredAnalysisJoinCondition>",
      required: true,
    },
    joinType: {
      baseName: "join_type",
      type: "StructuredAnalysisJoinJoinType",
      required: true,
    },
    targetColumns: {
      baseName: "target_columns",
      type: "Array<string>",
      required: true,
    },
    targetDataset: {
      baseName: "target_dataset",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "StructuredAnalysisJoinType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return StructuredAnalysisJoin.attributeTypeMap;
  }

  public constructor() {}
}
