import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UserJourneyJoinKeys } from "./UserJourneyJoinKeys";
import { UserJourneySearchFilters } from "./UserJourneySearchFilters";

/**
 * User journey search configuration.
 */
export class UserJourneySearch {
  /**
   * Expression string.
   */
  "expression": string;
  /**
   * Filters for user journey search.
   */
  "filters"?: UserJourneySearchFilters;
  /**
   * Join keys for user journey queries.
   */
  "joinKeys"?: UserJourneyJoinKeys;
  /**
   * Node objects mapping.
   */
  "nodeObjects": { [key: string]: any };
  /**
   * Step aliases mapping.
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
      type: "UserJourneyJoinKeys",
    },
    nodeObjects: {
      baseName: "node_objects",
      type: "{ [key: string]: any; }",
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
