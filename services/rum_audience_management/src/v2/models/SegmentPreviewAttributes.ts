import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SegmentDataQuery } from "./SegmentDataQuery";

/**
 * Segment definition to preview and the columns to return.
 * Without columns, the response returns the user ID, or the account ID for account segments.
 */
export class SegmentPreviewAttributes {
  /**
   * Account profile columns to return.
   */
  "accountStoreColumns"?: Array<string>;
  /**
   * Defines who belongs to the segment. It contains one or more blocks, up to 20 in total.
   * Use `combination` to combine named blocks with a boolean formula such as `A AND NOT B`.
   */
  "dataQuery": SegmentDataQuery;
  /**
   * Maximum number of rows to return, up to 1000. Defaults to 1000.
   */
  "limit"?: number;
  /**
   * Reference table columns to return.
   */
  "referenceTableColumns"?: Array<string>;
  /**
   * User profile columns to return.
   */
  "userStoreColumns"?: Array<string>;
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
    accountStoreColumns: {
      baseName: "account_store_columns",
      type: "Array<string>",
    },
    dataQuery: {
      baseName: "data_query",
      type: "SegmentDataQuery",
      required: true,
    },
    limit: {
      baseName: "limit",
      type: "number",
      format: "int64",
    },
    referenceTableColumns: {
      baseName: "reference_table_columns",
      type: "Array<string>",
    },
    userStoreColumns: {
      baseName: "user_store_columns",
      type: "Array<string>",
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
    return SegmentPreviewAttributes.attributeTypeMap;
  }

  public constructor() {}
}
