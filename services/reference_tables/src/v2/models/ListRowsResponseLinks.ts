import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Pagination links for the list rows response.
 */
export class ListRowsResponseLinks {
  /**
   * Link to the first page of results.
   */
  "first": string;
  /**
   * Link to the next page of results. Only present when more rows are available.
   */
  "next"?: string;
  /**
   * Link to the current page of results.
   */
  "self": string;
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
    first: {
      baseName: "first",
      type: "string",
      required: true,
    },
    next: {
      baseName: "next",
      type: "string",
    },
    self: {
      baseName: "self",
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
    return ListRowsResponseLinks.attributeTypeMap;
  }

  public constructor() {}
}
