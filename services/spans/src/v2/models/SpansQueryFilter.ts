import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The search and filter query settings.
 */
export class SpansQueryFilter {
  /**
   * The minimum time for the requested spans, supports date-time ISO8601, date math, and regular timestamps (milliseconds).
   */
  "from"?: string;
  /**
   * The search query - following the span search syntax.
   */
  "query"?: string;
  /**
   * The maximum time for the requested spans, supports date-time ISO8601, date math, and regular timestamps (milliseconds).
   */
  "to"?: string;
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
    from: {
      baseName: "from",
      type: "string",
    },
    query: {
      baseName: "query",
      type: "string",
    },
    to: {
      baseName: "to",
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
    return SpansQueryFilter.attributeTypeMap;
  }

  public constructor() {}
}
