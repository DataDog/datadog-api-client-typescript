/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LegacyUserJourneySearchFilters } from "./LegacyUserJourneySearchFilters";
import { LegacyUserJourneySearchJoinKeys } from "./LegacyUserJourneySearchJoinKeys";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
