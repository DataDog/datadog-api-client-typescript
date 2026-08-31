import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Cursor pagination fields for a usage quota list response.
 */
export class UsageQuotasResponseMetaPage {
  /**
   * An opaque cursor for retrieving the next page. Omitted when there are no more results.
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
    return UsageQuotasResponseMetaPage.attributeTypeMap;
  }

  public constructor() {}
}
