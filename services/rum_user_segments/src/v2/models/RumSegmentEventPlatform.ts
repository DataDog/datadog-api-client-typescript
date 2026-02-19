import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * An event platform query block within a segment data query.
 */
export class RumSegmentEventPlatform {
  /**
   * The facet to extract user identifiers from.
   */
  "facet": string;
  /**
   * The start of the time range in milliseconds since epoch.
   */
  "from"?: number;
  /**
   * The name of this query block.
   */
  "name": string;
  /**
   * The search query for filtering events.
   */
  "query": string;
  /**
   * The end of the time range in milliseconds since epoch.
   */
  "to"?: number;
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
    facet: {
      baseName: "facet",
      type: "string",
      required: true,
    },
    from: {
      baseName: "from",
      type: "number",
      format: "int64",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    query: {
      baseName: "query",
      type: "string",
      required: true,
    },
    to: {
      baseName: "to",
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
    return RumSegmentEventPlatform.attributeTypeMap;
  }

  public constructor() {}
}
