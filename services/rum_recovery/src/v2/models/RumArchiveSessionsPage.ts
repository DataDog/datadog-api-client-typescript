import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Search pagination.
 */
export class RumArchiveSessionsPage {
  /**
   * Opaque continuation cursor. Omitted when no further page is available.
   */
  "nextCursor"?: string;
  /**
   * Search result count. Can be zero on continuation pages even when sessions are returned. Use `next_cursor` to determine whether more pages are available.
   */
  "totalCount": number;
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
    totalCount: {
      baseName: "total_count",
      type: "number",
      required: true,
      format: "int64",
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
    return RumArchiveSessionsPage.attributeTypeMap;
  }

  public constructor() {}
}
