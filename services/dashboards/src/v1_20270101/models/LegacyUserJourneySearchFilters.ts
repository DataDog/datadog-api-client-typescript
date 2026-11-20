import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AudienceFilters } from "./AudienceFilters";
import { GraphQuerySearchFilter } from "./GraphQuerySearchFilter";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class LegacyUserJourneySearchFilters {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "audienceFilters"?: AudienceFilters;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "graphFilters"?: Array<GraphQuerySearchFilter>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "stringFilter"?: string;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    audienceFilters: {
      baseName: "audience_filters",
      type: "AudienceFilters",
    },
    graphFilters: {
      baseName: "graph_filters",
      type: "Array<GraphQuerySearchFilter>",
    },
    stringFilter: {
      baseName: "string_filter",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return LegacyUserJourneySearchFilters.attributeTypeMap;
  }

  public constructor() {}
}
