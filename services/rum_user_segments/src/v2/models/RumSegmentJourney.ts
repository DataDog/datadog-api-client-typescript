import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A journey-based query block within a segment data query.
 */
export class RumSegmentJourney {
  /**
   * The type of conversion to track.
   */
  "conversionType"?: string;
  /**
   * The facet to group journey results by.
   */
  "groupBy"?: string;
  /**
   * The name of this journey query block.
   */
  "name"?: string;
  /**
   * The search query for filtering events.
   */
  "search"?: string;
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
    conversionType: {
      baseName: "conversion_type",
      type: "string",
    },
    groupBy: {
      baseName: "group_by",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    search: {
      baseName: "search",
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
    return RumSegmentJourney.attributeTypeMap;
  }

  public constructor() {}
}
