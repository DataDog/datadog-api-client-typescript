/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { JourneyMapConversionType } from "./JourneyMapConversionType";
import { JourneyMapCountingMethod } from "./JourneyMapCountingMethod";
import { JourneyMapExpandedPrefix } from "./JourneyMapExpandedPrefix";
import { JourneyMapGroupBy } from "./JourneyMapGroupBy";
import { JourneyMapTarget } from "./JourneyMapTarget";
import { ProductAnalyticsFunnelDataSource } from "./ProductAnalyticsFunnelDataSource";
import { UserJourneySearch } from "./UserJourneySearch";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Journey Paths query definition.
 */
export class JourneyMapQuery {
  /**
   * Whether to show the paths that convert to the end step or drop off before it.
   */
  "conversionType"?: JourneyMapConversionType;
  /**
   * Whether to count unique journeys or all journeys.
   */
  "countingMethod"?: JourneyMapCountingMethod;
  /**
   * Data source for user journey funnel queries.
   */
  "dataSource": ProductAnalyticsFunnelDataSource;
  /**
   * Maximum number of paths shown per step.
   */
  "entriesPerStep"?: number;
  /**
   * Filter applied to the events shown along the paths.
   */
  "eventFilter"?: string;
  /**
   * Paths expanded to show the events that follow them.
   */
  "expandedPrefixes"?: Array<JourneyMapExpandedPrefix>;
  /**
   * Group by configuration.
   */
  "groupBy"?: Array<JourneyMapGroupBy>;
  /**
   * User journey search configuration.
   */
  "search": UserJourneySearch;
  /**
   * The pair of journey steps the paths are visualized between.
   */
  "target": JourneyMapTarget;

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    conversionType: {
      baseName: "conversion_type",
      type: "JourneyMapConversionType",
    },
    countingMethod: {
      baseName: "counting_method",
      type: "JourneyMapCountingMethod",
    },
    dataSource: {
      baseName: "data_source",
      type: "ProductAnalyticsFunnelDataSource",
      required: true,
    },
    entriesPerStep: {
      baseName: "entries_per_step",
      type: "number",
      format: "int64",
    },
    eventFilter: {
      baseName: "event_filter",
      type: "string",
    },
    expandedPrefixes: {
      baseName: "expanded_prefixes",
      type: "Array<JourneyMapExpandedPrefix>",
    },
    groupBy: {
      baseName: "group_by",
      type: "Array<JourneyMapGroupBy>",
    },
    search: {
      baseName: "search",
      type: "UserJourneySearch",
      required: true,
    },
    target: {
      baseName: "target",
      type: "JourneyMapTarget",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return JourneyMapQuery.attributeTypeMap;
  }

  public constructor() {}
}
