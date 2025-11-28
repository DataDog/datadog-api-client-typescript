import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Teams hierarchy links response links.
 */
export class TeamsHierarchyLinksResponseLinks {
  /**
   * Link to the first page.
   */
  "first"?: string;
  /**
   * Link to the last page.
   */
  "last"?: string;
  /**
   * Link to the next page.
   */
  "next"?: string;
  /**
   * Link to the previous page.
   */
  "prev"?: string;
  /**
   * Link to the current object.
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
    return TeamsHierarchyLinksResponseLinks.attributeTypeMap;
  }

  public constructor() {}
}
