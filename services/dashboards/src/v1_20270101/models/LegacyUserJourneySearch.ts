import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LegacyUserJourneySearchFilters } from "./LegacyUserJourneySearchFilters";
import { LegacyUserJourneySearchJoinKeys } from "./LegacyUserJourneySearchJoinKeys";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class LegacyUserJourneySearch {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "expression": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "filters"?: LegacyUserJourneySearchFilters;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "joinKeys"?: LegacyUserJourneySearchJoinKeys;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "nodes": { [key: string]: string };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    expression: {
      baseName: "expression",
      type: "string",
      required: true,
    },
    filters: {
      baseName: "filters",
      type: "LegacyUserJourneySearchFilters",
    },
    joinKeys: {
      baseName: "join_keys",
      type: "LegacyUserJourneySearchJoinKeys",
    },
    nodes: {
      baseName: "nodes",
      type: "{ [key: string]: string; }",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return LegacyUserJourneySearch.attributeTypeMap;
  }

  public constructor() {}
}
