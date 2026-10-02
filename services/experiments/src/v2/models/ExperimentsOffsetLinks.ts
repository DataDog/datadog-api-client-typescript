import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Links for navigating a paginated result set.
 */
export class ExperimentsOffsetLinks {
  /**
   * URL of the first page of results.
   */
  "first"?: string;
  /**
   * URL of the last page of results.
   */
  "last"?: string;
  /**
   * URL of the next page of results.
   */
  "next"?: string;
  /**
   * URL of the previous page of results.
   */
  "prev"?: string;
  /**
   * URL of the current page of results.
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
    return ExperimentsOffsetLinks.attributeTypeMap;
  }

  public constructor() {}
}
