/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { BaseProductAnalyticsQuery } from "./BaseProductAnalyticsQuery";
import { UserJourneySearchFilters } from "./UserJourneySearchFilters";
import { UserJourneySearchJoinKeys } from "./UserJourneySearchJoinKeys";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
