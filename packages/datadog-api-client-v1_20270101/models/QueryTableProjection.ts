/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { QueryTableProjectionColumnOrder } from "./QueryTableProjectionColumnOrder";
import { QueryTableProjectionDimension } from "./QueryTableProjectionDimension";
import { QueryTableProjectionType } from "./QueryTableProjectionType";
import { QueryTableProjectionUnlistedColumns } from "./QueryTableProjectionUnlistedColumns";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class QueryTableProjection {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "columnOrder"?: QueryTableProjectionColumnOrder;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "dimensions": Array<QueryTableProjectionDimension>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": QueryTableProjectionType;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "unlistedColumns"?: QueryTableProjectionUnlistedColumns;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    columnOrder: {
      baseName: "column_order",
      type: "QueryTableProjectionColumnOrder",
    },
    dimensions: {
      baseName: "dimensions",
      type: "Array<QueryTableProjectionDimension>",
      required: true,
    },
    type: {
      baseName: "type",
      type: "QueryTableProjectionType",
      required: true,
    },
    unlistedColumns: {
      baseName: "unlisted_columns",
      type: "QueryTableProjectionUnlistedColumns",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return QueryTableProjection.attributeTypeMap;
  }

  public constructor() {}
}
