import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { JourneyMapGroupByAudience } from "./JourneyMapGroupByAudience";

/**
 * Group by configuration for the Journey Paths widget.
 */
export class JourneyMapGroupBy {
  /**
   * Facet to group by. Must be a valid tag name.
   */
  "facet": string;
  /**
   * Audience the group by facet is read from.
   */
  "source"?: JourneyMapGroupByAudience;
  /**
   * Facet values to keep.
   */
  "valueFilters": Array<string>;
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
    source: {
      baseName: "source",
      type: "JourneyMapGroupByAudience",
    },
    valueFilters: {
      baseName: "value_filters",
      type: "Array<string>",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return JourneyMapGroupBy.attributeTypeMap;
  }

  public constructor() {}
}
