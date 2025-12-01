import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Metadata related to paging information that is included in the response when querying the team hierarchy links
 */
export class TeamsHierarchyLinksResponseMetaPage {
  /**
   * First page number.
   */
  "firstNumber"?: number;
  /**
   * Last page number.
   */
  "lastNumber"?: number;
  /**
   * Next page number.
   */
  "nextNumber"?: number;
  /**
   * Page number.
   */
  "number"?: number;
  /**
   * Previous page number.
   */
  "prevNumber"?: number;
  /**
   * Page size.
   */
  "size"?: number;
  /**
   * Total number of results.
   */
  "total"?: number;
  /**
   * Pagination type.
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
      format: "int64",
    },
    total: {
      baseName: "total",
      type: "number",
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
    return TeamsHierarchyLinksResponseMetaPage.attributeTypeMap;
  }

  public constructor() {}
}
