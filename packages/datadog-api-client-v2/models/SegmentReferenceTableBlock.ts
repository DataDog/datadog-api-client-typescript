/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SegmentReferenceTableColumn } from "./SegmentReferenceTableColumn";
import { SegmentReferenceTableJoinCondition } from "./SegmentReferenceTableJoinCondition";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Selects users or accounts from a reference table.
 */
export class SegmentReferenceTableBlock {
  /**
   * Columns to include.
   */
  "columns"?: Array<SegmentReferenceTableColumn>;
  /**
   * Query that filters the reference table rows.
   */
  "filterQuery"?: string;
  /**
   * How reference table rows are matched to entities.
   */
  "joinCondition": SegmentReferenceTableJoinCondition;
  /**
   * Name of the block, used in `combination`.
   */
  "name"?: string;
  /**
   * Name of the reference table.
   */
  "tableName": string;

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
    columns: {
      baseName: "columns",
      type: "Array<SegmentReferenceTableColumn>",
    },
    filterQuery: {
      baseName: "filter_query",
      type: "string",
    },
    joinCondition: {
      baseName: "join_condition",
      type: "SegmentReferenceTableJoinCondition",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
    },
    tableName: {
      baseName: "table_name",
      type: "string",
      required: true,
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
    return SegmentReferenceTableBlock.attributeTypeMap;
  }

  public constructor() {}
}
