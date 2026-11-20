/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AudienceFilters } from "./AudienceFilters";
import { GraphQuerySearchFilter } from "./GraphQuerySearchFilter";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class UserJourneySearchFilters {
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
    return UserJourneySearchFilters.attributeTypeMap;
  }

  public constructor() {}
}
