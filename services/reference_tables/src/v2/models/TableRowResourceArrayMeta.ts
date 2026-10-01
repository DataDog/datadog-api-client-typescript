import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Metadata about the rows requested, including which ones were not found.
 */
export class TableRowResourceArrayMeta {
  /**
   * Number of requested rows that were found and returned in `data`.
   */
  "foundCount": number;
  /**
   * Row IDs from the request that do not exist in the reference table. Empty when every requested row was found.
   */
  "notFound": Array<string>;
  /**
   * Number of row IDs supplied in the `row_id` query parameter.
   */
  "requestedCount": number;
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
    foundCount: {
      baseName: "found_count",
      type: "number",
      required: true,
      format: "int64",
    },
    notFound: {
      baseName: "not_found",
      type: "Array<string>",
      required: true,
    },
    requestedCount: {
      baseName: "requested_count",
      type: "number",
      required: true,
      format: "int64",
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
    return TableRowResourceArrayMeta.attributeTypeMap;
  }

  public constructor() {}
}
