import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Pagination settings for a span search request.
 */
export class LLMObsSpanPageQuery {
  /**
   * Cursor from the previous response to retrieve the next page.
   */
  "cursor"?: string;
  /**
   * Maximum number of spans to return. Defaults to `10`.
   */
  "limit"?: number;
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
    limit: {
      baseName: "limit",
      type: "number",
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
    return LLMObsSpanPageQuery.attributeTypeMap;
  }

  public constructor() {}
}
