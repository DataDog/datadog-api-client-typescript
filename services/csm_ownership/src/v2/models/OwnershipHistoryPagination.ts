import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Cursor-based pagination metadata for the history response.
 */
export class OwnershipHistoryPagination {
  /**
   * Whether more history entries are available beyond this page.
   */
  "hasMore": boolean;
  /**
   * An opaque, base64-encoded cursor token. Pass it as the `cursor` query parameter to retrieve the next page. Absent or `null` when there are no further pages.
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
    hasMore: {
      baseName: "has_more",
      type: "boolean",
      required: true,
    },
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
    return OwnershipHistoryPagination.attributeTypeMap;
  }

  public constructor() {}
}
