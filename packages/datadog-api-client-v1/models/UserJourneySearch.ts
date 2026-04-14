/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UserJourneyJoinKeys } from "./UserJourneyJoinKeys";
import { UserJourneySearchFilters } from "./UserJourneySearchFilters";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
