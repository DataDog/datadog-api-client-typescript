import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Pagination links for a list of dashboard usage records.
 */
export class ListDashboardsUsageResponseLinks {
  /**
   * Link to the first page.
   */
  "first"?: string;
  /**
   * Link to the last page, or `null` if the total is unknown.
   */
  "last"?: string;
  /**
   * Link to the next page. Absent when there is no next page.
   */
  "next"?: string;
  /**
   * Link to the previous page. Absent when there is no previous page.
   */
  "prev"?: string;
  /**
   * Link to the current page.
   */
  "self"?: string;
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
    },
    last: {
      baseName: "last",
      type: "string",
    },
    next: {
      baseName: "next",
      type: "string",
    },
    prev: {
      baseName: "prev",
      type: "string",
    },
    self: {
      baseName: "self",
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
    return ListDashboardsUsageResponseLinks.attributeTypeMap;
  }

  public constructor() {}
}
