/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { FormulaAndFunctionEventsDataSource } from "./FormulaAndFunctionEventsDataSource";
import { TimeSeriesFormulaAndFunctionEventQueryDefinitionCompute } from "./TimeSeriesFormulaAndFunctionEventQueryDefinitionCompute";
import { TimeSeriesFormulaAndFunctionEventQueryDefinitionSearch } from "./TimeSeriesFormulaAndFunctionEventQueryDefinitionSearch";
import { TimeSeriesFormulaAndFunctionEventQueryGroupBy } from "./TimeSeriesFormulaAndFunctionEventQueryGroupBy";

export class TimeSeriesFormulaAndFunctionEventQueryDefinition {
  "compute": TimeSeriesFormulaAndFunctionEventQueryDefinitionCompute;
  "dataSource": FormulaAndFunctionEventsDataSource;
  /**
   * Group by options.
   */
  "groupBy"?: Array<TimeSeriesFormulaAndFunctionEventQueryGroupBy>;
  /**
   * An array of index names to query in the stream. Omit or use `[]` to query all indexes at once.
   */
  "indexes"?: Array<string>;
  /**
   * Name of the query for use in formulas.
   */
  "name"?: string;
  "search"?: TimeSeriesFormulaAndFunctionEventQueryDefinitionSearch;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: "compute",
      baseName: "compute",
      type: "TimeSeriesFormulaAndFunctionEventQueryDefinitionCompute",
      format: "",
    },
    {
      name: "dataSource",
      baseName: "data_source",
      type: "FormulaAndFunctionEventsDataSource",
      format: "",
    },
    {
      name: "groupBy",
      baseName: "group_by",
      type: "Array<TimeSeriesFormulaAndFunctionEventQueryGroupBy>",
      format: "",
    },
    {
      name: "indexes",
      baseName: "indexes",
      type: "Array<string>",
      format: "",
    },
    {
      name: "name",
      baseName: "name",
      type: "string",
      format: "",
    },
    {
      name: "search",
      baseName: "search",
      type: "TimeSeriesFormulaAndFunctionEventQueryDefinitionSearch",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return TimeSeriesFormulaAndFunctionEventQueryDefinition.attributeTypeMap;
  }

  public constructor() {}
}
