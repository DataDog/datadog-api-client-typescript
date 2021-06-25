/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { FormulaAndFunctionMetricAggregation } from "./FormulaAndFunctionMetricAggregation";
import { FormulaAndFunctionProcessQueryDataSource } from "./FormulaAndFunctionProcessQueryDataSource";
import { QuerySortOrder } from "./QuerySortOrder";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * Process query using formulas and functions.
 */

export class FormulaAndFunctionProcessQueryDefinition {
  "aggregator"?: FormulaAndFunctionMetricAggregation;
  "dataSource": FormulaAndFunctionProcessQueryDataSource;
  /**
   * Whether to normalize the CPU percentages.
   */
  "isNormalizedCpu"?: boolean;
  /**
   * Number of hits to return.
   */
  "limit"?: number;
  /**
   * Process metric name.
   */
  "metric": string;
  /**
   * Name of query for use in formulas.
   */
  "name": string;
  "sort"?: QuerySortOrder;
  /**
   * An array of tags to filter by.
   */
  "tagFilters"?: Array<string>;
  /**
   * Text to use as filter.
   */
  "textFilter"?: string;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    aggregator: {
      baseName: "aggregator",
      type: "FormulaAndFunctionMetricAggregation",
      format: "",
    },
    dataSource: {
      baseName: "data_source",
      type: "FormulaAndFunctionProcessQueryDataSource",
      format: "",
    },
    isNormalizedCpu: {
      baseName: "is_normalized_cpu",
      type: "boolean",
      format: "",
    },
    limit: {
      baseName: "limit",
      type: "number",
      format: "int64",
    },
    metric: {
      baseName: "metric",
      type: "string",
      format: "",
    },
    name: {
      baseName: "name",
      type: "string",
      format: "",
    },
    sort: {
      baseName: "sort",
      type: "QuerySortOrder",
      format: "",
    },
    tagFilters: {
      baseName: "tag_filters",
      type: "Array<string>",
      format: "",
    },
    textFilter: {
      baseName: "text_filter",
      type: "string",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return FormulaAndFunctionProcessQueryDefinition.attributeTypeMap;
  }

  static deserialize(data: {
    [key: string]: any;
  }): FormulaAndFunctionProcessQueryDefinition {
    const res = new FormulaAndFunctionProcessQueryDefinition();

    if (
      [
        "avg",
        "min",
        "max",
        "sum",
        "last",
        "area",
        "l2norm",
        undefined,
      ].includes(data.aggregator)
    ) {
      res.aggregator = data.aggregator;
    } else {
      throw TypeError(`invalid enum value ${data.aggregator} for aggregator`);
    }

    if (data.data_source === undefined) {
      throw new TypeError(
        "missing required attribute 'data_source' on 'FormulaAndFunctionProcessQueryDefinition' object"
      );
    }
    if (["process", "container", undefined].includes(data.data_source)) {
      res.dataSource = data.data_source;
    } else {
      throw TypeError(`invalid enum value ${data.data_source} for data_source`);
    }

    res.isNormalizedCpu = ObjectSerializer.deserialize(
      data.is_normalized_cpu,
      "boolean",
      ""
    );

    res.limit = ObjectSerializer.deserialize(data.limit, "number", "int64");

    if (data.metric === undefined) {
      throw new TypeError(
        "missing required attribute 'metric' on 'FormulaAndFunctionProcessQueryDefinition' object"
      );
    }
    res.metric = ObjectSerializer.deserialize(data.metric, "string", "");

    if (data.name === undefined) {
      throw new TypeError(
        "missing required attribute 'name' on 'FormulaAndFunctionProcessQueryDefinition' object"
      );
    }
    res.name = ObjectSerializer.deserialize(data.name, "string", "");

    if (["asc", "desc", undefined].includes(data.sort)) {
      res.sort = data.sort;
    } else {
      throw TypeError(`invalid enum value ${data.sort} for sort`);
    }

    res.tagFilters = ObjectSerializer.deserialize(
      data.tag_filters,
      "Array<string>",
      ""
    );

    res.textFilter = ObjectSerializer.deserialize(
      data.text_filter,
      "string",
      ""
    );

    return res;
  }

  static serialize(
    data: FormulaAndFunctionProcessQueryDefinition
  ): { [key: string]: any } {
    const attributeTypes = FormulaAndFunctionProcessQueryDefinition.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (
      [
        "avg",
        "min",
        "max",
        "sum",
        "last",
        "area",
        "l2norm",
        undefined,
      ].includes(data.aggregator)
    ) {
      res.aggregator = data.aggregator;
    } else {
      throw TypeError(`invalid enum value ${data.aggregator} for aggregator`);
    }

    if (data.dataSource === undefined) {
      throw new TypeError(
        "missing required attribute 'data_source' on 'FormulaAndFunctionProcessQueryDefinition' object"
      );
    }
    if (["process", "container", undefined].includes(data.dataSource)) {
      res.data_source = data.dataSource;
    } else {
      throw TypeError(`invalid enum value ${data.dataSource} for dataSource`);
    }

    res.is_normalized_cpu = ObjectSerializer.serialize(
      data.isNormalizedCpu,
      "boolean",
      ""
    );

    res.limit = ObjectSerializer.serialize(data.limit, "number", "int64");

    if (data.metric === undefined) {
      throw new TypeError(
        "missing required attribute 'metric' on 'FormulaAndFunctionProcessQueryDefinition' object"
      );
    }
    res.metric = ObjectSerializer.serialize(data.metric, "string", "");

    if (data.name === undefined) {
      throw new TypeError(
        "missing required attribute 'name' on 'FormulaAndFunctionProcessQueryDefinition' object"
      );
    }
    res.name = ObjectSerializer.serialize(data.name, "string", "");

    if (["asc", "desc", undefined].includes(data.sort)) {
      res.sort = data.sort;
    } else {
      throw TypeError(`invalid enum value ${data.sort} for sort`);
    }

    res.tag_filters = ObjectSerializer.serialize(
      data.tagFilters,
      "Array<string>",
      ""
    );

    res.text_filter = ObjectSerializer.serialize(data.textFilter, "string", "");

    return res;
  }

  public constructor() {}
}
