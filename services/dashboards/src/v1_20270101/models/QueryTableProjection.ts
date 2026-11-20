import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { QueryTableProjectionColumnOrder } from "./QueryTableProjectionColumnOrder";
import { QueryTableProjectionDimension } from "./QueryTableProjectionDimension";
import { QueryTableProjectionType } from "./QueryTableProjectionType";
import { QueryTableProjectionUnlistedColumns } from "./QueryTableProjectionUnlistedColumns";

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
