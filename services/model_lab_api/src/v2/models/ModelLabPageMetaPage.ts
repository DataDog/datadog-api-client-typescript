import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Pagination details for a list response.
 */
export class ModelLabPageMetaPage {
  /**
   * The first page number.
   */
  "firstNumber"?: number;
  /**
   * The last page number.
   */
  "lastNumber"?: number;
  /**
   * The next page number.
   */
  "nextNumber"?: number;
  /**
   * The current page number.
   */
  "number": number;
  /**
   * The previous page number.
   */
  "prevNumber"?: number;
  /**
   * The number of items per page.
   */
  "size": number;
  /**
   * The total number of items.
   */
  "total": number;
  /**
   * The pagination type.
   */
  "type"?: string;
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
    firstNumber: {
      baseName: "first_number",
      type: "number",
      format: "int64",
    },
    lastNumber: {
      baseName: "last_number",
      type: "number",
      format: "int64",
    },
    nextNumber: {
      baseName: "next_number",
      type: "number",
      format: "int64",
    },
    number: {
      baseName: "number",
      type: "number",
      required: true,
      format: "int64",
    },
    prevNumber: {
      baseName: "prev_number",
      type: "number",
      format: "int64",
    },
    size: {
      baseName: "size",
      type: "number",
      required: true,
      format: "int64",
    },
    total: {
      baseName: "total",
      type: "number",
      required: true,
      format: "int64",
    },
    type: {
      baseName: "type",
      type: "string",
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
    return ModelLabPageMetaPage.attributeTypeMap;
  }

  public constructor() {}
}
