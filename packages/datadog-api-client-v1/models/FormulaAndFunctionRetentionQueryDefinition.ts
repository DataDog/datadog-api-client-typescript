/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RetentionCompute } from "./RetentionCompute";
import { RetentionDataSource } from "./RetentionDataSource";
import { RetentionGroupBy } from "./RetentionGroupBy";
import { RetentionSearch } from "./RetentionSearch";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A formula and functions Retention query for defining timeseries and scalar visualizations.
 */
export class FormulaAndFunctionRetentionQueryDefinition {
  /**
   * Compute configuration for retention queries.
   */
  "compute": RetentionCompute;
  /**
   * Data source for retention queries.
   */
  "dataSource": RetentionDataSource;
  /**
   * Group by configuration.
   */
  "groupBy"?: Array<RetentionGroupBy>;
  /**
   * Name of the query for use in formulas.
   */
  "name": string;
  /**
   * Search configuration for retention queries.
   */
  "search": RetentionSearch;

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
      type: "RetentionCompute",
      required: true,
    },
    dataSource: {
      baseName: "data_source",
      type: "RetentionDataSource",
      required: true,
    },
    groupBy: {
      baseName: "group_by",
      type: "Array<RetentionGroupBy>",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    search: {
      baseName: "search",
      type: "RetentionSearch",
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
    return FormulaAndFunctionRetentionQueryDefinition.attributeTypeMap;
  }

  public constructor() {}
}
