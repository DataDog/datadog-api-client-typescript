/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { NumberBarTableColumnFormat } from "./NumberBarTableColumnFormat";
import { NumberReferenceTableColumnReference } from "./NumberReferenceTableColumnReference";
import { NumberReferenceTableColumnType } from "./NumberReferenceTableColumnType";
import { TableColumnComparison } from "./TableColumnComparison";
import { TableColumnFunction } from "./TableColumnFunction";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class NumberReferenceTableColumn {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "alias"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "comparison"?: TableColumnComparison;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "format": NumberBarTableColumnFormat;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "functions"?: Array<TableColumnFunction>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "isHidden"?: boolean;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "name": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "reference": NumberReferenceTableColumnReference;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": NumberReferenceTableColumnType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    alias: {
      baseName: "alias",
      type: "string",
    },
    comparison: {
      baseName: "comparison",
      type: "TableColumnComparison",
    },
    format: {
      baseName: "format",
      type: "NumberBarTableColumnFormat",
      required: true,
    },
    functions: {
      baseName: "functions",
      type: "Array<TableColumnFunction>",
    },
    isHidden: {
      baseName: "is_hidden",
      type: "boolean",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    reference: {
      baseName: "reference",
      type: "NumberReferenceTableColumnReference",
      required: true,
    },
    type: {
      baseName: "type",
      type: "NumberReferenceTableColumnType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return NumberReferenceTableColumn.attributeTypeMap;
  }

  public constructor() {}
}
