import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Pagination links for the list investigations response.
 */
export class ListInvestigationsResponseLinks {
  /**
   * Link to the first page.
   */
  "first": string;
  /**
   * Link to the last page.
   */
  "last"?: string;
  /**
   * Link to the next page.
   */
  "next": string;
  /**
   * Link to the previous page.
   */
  "prev"?: string;
  /**
   * Link to the current page.
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
    last: {
      baseName: "last",
      type: "string",
    },
    next: {
      baseName: "next",
      type: "string",
      required: true,
    },
    prev: {
      baseName: "prev",
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
    return ListInvestigationsResponseLinks.attributeTypeMap;
  }

  public constructor() {}
}
