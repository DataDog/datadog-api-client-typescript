import { AttributeTypeMap } from "@datadog/datadog-api-client";


/**
 * Pagination links for navigating a report schedule list response.
 */
export class ReportScheduleListResponseLinks {
  /**
   * Link to the first page.
   */
  "first"?: string;
  /**
   * Link to the last page, or `null` if it is unavailable.
   */
  "last"?: string;
  /**
   * Link to the next page, or `null` if it is unavailable.
   */
  "next"?: string;
  /**
   * Link to the previous page, or `null` if it is unavailable.
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
  "additionalProperties"?: { [key: string]: any; };
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
    return ReportScheduleListResponseLinks.attributeTypeMap;
  }

  public constructor() {}
}
