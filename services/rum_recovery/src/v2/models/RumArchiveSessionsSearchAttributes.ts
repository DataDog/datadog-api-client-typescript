import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Archived-session query. A window wider than configured archive retention is narrowed before searching.
 */
export class RumArchiveSessionsSearchAttributes {
  /**
   * Opaque next-page cursor. Keep the query, time range, and hide_retained value unchanged.
   */
  "cursor"?: string;
  /**
   * Start of the range in Unix milliseconds. Must be positive and earlier than to.
   */
  "from": number;
  /**
   * When true, exclude sessions already present in hot RUM storage. When false, those sessions can appear in the results. Keep this value unchanged when continuing with a cursor.
   */
  "hideRetained"?: boolean;
  /**
   * Page size, at most 1000 (default 50). Values at or below zero use 50.
   */
  "limit"?: number;
  /**
   * RUM search query. Must not be empty.
   */
  "query": string;
  /**
   * End of the range in Unix milliseconds.
   */
  "to": number;
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
    cursor: {
      baseName: "cursor",
      type: "string",
    },
    from: {
      baseName: "from",
      type: "number",
      required: true,
      format: "int64",
    },
    hideRetained: {
      baseName: "hide_retained",
      type: "boolean",
    },
    limit: {
      baseName: "limit",
      type: "number",
      format: "int32",
    },
    query: {
      baseName: "query",
      type: "string",
      required: true,
    },
    to: {
      baseName: "to",
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
    return RumArchiveSessionsSearchAttributes.attributeTypeMap;
  }

  public constructor() {}
}
