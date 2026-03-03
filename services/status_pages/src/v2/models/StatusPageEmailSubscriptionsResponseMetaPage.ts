import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Pagination metadata.
 */
export class StatusPageEmailSubscriptionsResponseMetaPage {
  /**
   * The offset of the first page.
   */
  "firstOffset": number;
  /**
   * The offset of the last page.
   */
  "lastOffset": number;
  /**
   * The maximum number of items per page.
   */
  "limit": number;
  /**
   * The offset of the next page.
   */
  "nextOffset"?: number;
  /**
   * The current offset.
   */
  "offset": number;
  /**
   * The offset of the previous page.
   */
  "prevOffset"?: number;
  /**
   * The total number of items.
   */
  "total": number;
  /**
   * The pagination type.
   */
  "type": string;
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
    firstOffset: {
      baseName: "first_offset",
      type: "number",
      required: true,
      format: "int64",
    },
    lastOffset: {
      baseName: "last_offset",
      type: "number",
      required: true,
      format: "int64",
    },
    limit: {
      baseName: "limit",
      type: "number",
      required: true,
      format: "int64",
    },
    nextOffset: {
      baseName: "next_offset",
      type: "number",
      format: "int64",
    },
    offset: {
      baseName: "offset",
      type: "number",
      required: true,
      format: "int64",
    },
    prevOffset: {
      baseName: "prev_offset",
      type: "number",
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
    return StatusPageEmailSubscriptionsResponseMetaPage.attributeTypeMap;
  }

  public constructor() {}
}
