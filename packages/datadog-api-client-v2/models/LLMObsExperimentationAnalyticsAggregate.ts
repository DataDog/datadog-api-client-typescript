/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LLMObsExperimentationAnalyticsCompute } from "./LLMObsExperimentationAnalyticsCompute";
import { LLMObsExperimentationAnalyticsGroupBy } from "./LLMObsExperimentationAnalyticsGroupBy";
import { LLMObsExperimentationAnalyticsSearch } from "./LLMObsExperimentationAnalyticsSearch";
import { LLMObsExperimentationAnalyticsTimeRange } from "./LLMObsExperimentationAnalyticsTimeRange";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Analytics aggregation parameters.
 */
export class LLMObsExperimentationAnalyticsAggregate {
  /**
   * List of metric computations to perform.
   */
  "compute": Array<LLMObsExperimentationAnalyticsCompute>;
  /**
   * Filter to a specific dataset version.
   */
  "datasetVersion"?: number;
  /**
   * Fields to group results by.
   */
  "groupBy"?: Array<LLMObsExperimentationAnalyticsGroupBy>;
  /**
   * Data indexes to query. At least one is required.
   */
  "indexes": Array<string>;
  /**
   * Maximum number of results to return.
   */
  "limit"?: number;
  /**
   * Search query for filtering analytics data.
   */
  "search": LLMObsExperimentationAnalyticsSearch;
  /**
   * Unix-millisecond time range for filtering analytics data.
   */
  "time"?: LLMObsExperimentationAnalyticsTimeRange;

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
    compute: {
      baseName: "compute",
      type: "Array<LLMObsExperimentationAnalyticsCompute>",
      required: true,
    },
    datasetVersion: {
      baseName: "dataset_version",
      type: "number",
      format: "int64",
    },
    groupBy: {
      baseName: "group_by",
      type: "Array<LLMObsExperimentationAnalyticsGroupBy>",
    },
    indexes: {
      baseName: "indexes",
      type: "Array<string>",
      required: true,
    },
    limit: {
      baseName: "limit",
      type: "number",
      format: "int32",
    },
    search: {
      baseName: "search",
      type: "LLMObsExperimentationAnalyticsSearch",
      required: true,
    },
    time: {
      baseName: "time",
      type: "LLMObsExperimentationAnalyticsTimeRange",
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
    return LLMObsExperimentationAnalyticsAggregate.attributeTypeMap;
  }

  public constructor() {}
}
