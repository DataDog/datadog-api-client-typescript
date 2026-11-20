/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ComputeTableColumnCompute } from "./ComputeTableColumnCompute";
import { ComputeTableColumnType } from "./ComputeTableColumnType";
import { TableColumnComparison } from "./TableColumnComparison";
import { TableColumnFormat } from "./TableColumnFormat";
import { TableColumnFunction } from "./TableColumnFunction";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class ComputeTableColumn {
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
  "compute": ComputeTableColumnCompute;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "format": TableColumnFormat;
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
  "type": ComputeTableColumnType;

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
    compute: {
      baseName: "compute",
      type: "ComputeTableColumnCompute",
      required: true,
    },
    format: {
      baseName: "format",
      type: "TableColumnFormat",
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
    type: {
      baseName: "type",
      type: "ComputeTableColumnType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ComputeTableColumn.attributeTypeMap;
  }

  public constructor() {}
}
