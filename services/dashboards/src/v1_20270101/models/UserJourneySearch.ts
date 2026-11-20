import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { BaseProductAnalyticsQuery } from "./BaseProductAnalyticsQuery";
import { UserJourneySearchFilters } from "./UserJourneySearchFilters";
import { UserJourneySearchJoinKeys } from "./UserJourneySearchJoinKeys";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class UserJourneySearch {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "expression": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "filters"?: UserJourneySearchFilters;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "joinKeys"?: UserJourneySearchJoinKeys;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "nodeObjects": { [key: string]: BaseProductAnalyticsQuery };
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "stepAliases"?: { [key: string]: string };
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
      type: "UserJourneySearchFilters",
    },
    joinKeys: {
      baseName: "join_keys",
      type: "UserJourneySearchJoinKeys",
    },
    nodeObjects: {
      baseName: "node_objects",
      type: "{ [key: string]: BaseProductAnalyticsQuery; }",
      required: true,
    },
    stepAliases: {
      baseName: "step_aliases",
      type: "{ [key: string]: string; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return UserJourneySearch.attributeTypeMap;
  }

  public constructor() {}
}
