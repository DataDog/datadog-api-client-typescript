/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TableSortColumnsItems } from "./TableSortColumnsItems";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class TableSort {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "columns": Array<TableSortColumnsItems>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "limit": number;

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
      type: "Array<TableSortColumnsItems>",
      required: true,
    },
    limit: {
      baseName: "limit",
      type: "number",
      required: true,
      format: "double",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TableSort.attributeTypeMap;
  }

  public constructor() {}
}
