import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Page navigation links. Unavailable links are omitted.
 */
export class TeamHierarchyMembersResponseLinks {
  /**
   * First page URL.
   */
  "first"?: string;
  /**
   * Last page URL.
   */
  "last"?: string;
  /**
   * Next page URL.
   */
  "next"?: string;
  /**
   * Previous page URL.
   */
  "prev"?: string;
  /**
   * Current page URL.
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
    return TeamHierarchyMembersResponseLinks.attributeTypeMap;
  }

  public constructor() {}
}
