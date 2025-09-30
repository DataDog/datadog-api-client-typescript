import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Pagination metadata for flaky tests.
 */
export class FlakyTestsPagination {
  /**
   * Cursor for the next page of results.
   */
  "nextPage"?: string;
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
    nextPage: {
      baseName: "next_page",
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
    return FlakyTestsPagination.attributeTypeMap;
  }

  public constructor() {}
}
