/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LogQueryDefinitionGroupBy } from "./LogQueryDefinitionGroupBy";
import { LogQueryDefinitionSearch } from "./LogQueryDefinitionSearch";
import { LogsQueryCompute } from "./LogsQueryCompute";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The log query.
 */
export class LogQueryDefinition {
  /**
   * Define computation for a log query.
   */
  "compute"?: LogsQueryCompute;
  /**
   * List of tag prefixes to group by in the case of a cluster check.
   */
  "groupBy"?: Array<LogQueryDefinitionGroupBy>;
  /**
   * A coma separated-list of index names. Use "*" query all indexes at once. [Multiple Indexes](https://docs.datadoghq.com/logs/indexes/#multiple-indexes)
   */
  "index"?: string;
  /**
   * This field is mutually exclusive with `compute`.
   */
  "multiCompute"?: Array<LogsQueryCompute>;
  /**
   * The query being made on the logs.
   */
  "search"?: LogQueryDefinitionSearch;

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
      type: "LogsQueryCompute",
    },
    groupBy: {
      baseName: "group_by",
      type: "Array<LogQueryDefinitionGroupBy>",
    },
    index: {
      baseName: "index",
      type: "string",
    },
    multiCompute: {
      baseName: "multi_compute",
      type: "Array<LogsQueryCompute>",
    },
    search: {
      baseName: "search",
      type: "LogQueryDefinitionSearch",
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
    return LogQueryDefinition.attributeTypeMap;
  }

  public constructor() {}
}
