import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * UUID cursor pagination. A full final page can return a cursor followed by an empty page.
 */
export class TemporaryGrantRequestPage {
  /**
   * Use this UUID as page[cursor] to retrieve the next page. Omitted when the page is not full.
   */
  "nextCursor"?: string;
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
    nextCursor: {
      baseName: "next_cursor",
      type: "string",
      format: "uuid",
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
    return TemporaryGrantRequestPage.attributeTypeMap;
  }

  public constructor() {}
}
