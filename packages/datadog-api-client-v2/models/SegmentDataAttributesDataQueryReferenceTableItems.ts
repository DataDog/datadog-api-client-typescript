/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SegmentDataAttributesDataQueryReferenceTableItemsColumnsItems } from "./SegmentDataAttributesDataQueryReferenceTableItemsColumnsItems";
import { SegmentDataAttributesDataQueryReferenceTableItemsJoinCondition } from "./SegmentDataAttributesDataQueryReferenceTableItemsJoinCondition";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

export class SegmentDataAttributesDataQueryReferenceTableItems {
  "columns"?: Array<SegmentDataAttributesDataQueryReferenceTableItemsColumnsItems>;
  "filterQuery"?: string;
  "joinCondition": SegmentDataAttributesDataQueryReferenceTableItemsJoinCondition;
  "name"?: string;
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
      type: "Array<SegmentDataAttributesDataQueryReferenceTableItemsColumnsItems>",
    },
    filterQuery: {
      baseName: "filter_query",
      type: "string",
    },
    joinCondition: {
      baseName: "join_condition",
      type: "SegmentDataAttributesDataQueryReferenceTableItemsJoinCondition",
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
    return SegmentDataAttributesDataQueryReferenceTableItems.attributeTypeMap;
  }

  public constructor() {}
}
