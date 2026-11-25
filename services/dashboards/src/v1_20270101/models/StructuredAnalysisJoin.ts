import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { StructuredAnalysisJoinCondition } from "./StructuredAnalysisJoinCondition";
import { StructuredAnalysisJoinJoinType } from "./StructuredAnalysisJoinJoinType";
import { StructuredAnalysisJoinType } from "./StructuredAnalysisJoinType";

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
