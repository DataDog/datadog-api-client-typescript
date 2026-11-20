import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AudienceFilters } from "./AudienceFilters";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class RetentionSearchFilters {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "audienceFilters"?: AudienceFilters;
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
    stringFilter: {
      baseName: "string_filter",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RetentionSearchFilters.attributeTypeMap;
  }

  public constructor() {}
}
