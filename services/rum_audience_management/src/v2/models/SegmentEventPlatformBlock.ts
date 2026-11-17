import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Selects the users or accounts that sent matching RUM or Product Analytics events in a time range.
 * `from` and `to` are epoch milliseconds, or negative offsets in milliseconds relative to now. `0` means now.
 */
export class SegmentEventPlatformBlock {
  /**
   * Facet that identifies the entity, such as `@usr.id`.
   */
  "facet": string;
  /**
   * Start of the time range.
   */
  "from"?: string;
  /**
   * Name of the block, used in `combination`.
   */
  "name"?: string;
  /**
   * Event search query.
   */
  "query"?: string;
  /**
   * End of the time range.
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
    facet: {
      baseName: "facet",
      type: "string",
      required: true,
    },
    from: {
      baseName: "from",
      type: "string",
    },
    name: {
      baseName: "name",
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
    return SegmentEventPlatformBlock.attributeTypeMap;
  }

  public constructor() {}
}
