/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TableGroupKey } from "./TableGroupKey";
import { TableRowGroupByFormat } from "./TableRowGroupByFormat";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class TableRowGroupBy {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "alias"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "format"?: TableRowGroupByFormat;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "groupKeys": Array<TableGroupKey>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "isHidden"?: boolean;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "name": string;

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
    format: {
      baseName: "format",
      type: "TableRowGroupByFormat",
    },
    groupKeys: {
      baseName: "group_keys",
      type: "Array<TableGroupKey>",
      required: true,
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
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TableRowGroupBy.attributeTypeMap;
  }

  public constructor() {}
}
