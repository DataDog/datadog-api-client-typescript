/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LogQueryDefinitionGroupBySort } from "./LogQueryDefinitionGroupBySort";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Defined items in the group.
 */
export class LogQueryDefinitionGroupBy {
  /**
   * Facet name.
   */
  "facet": string;
  /**
   * Maximum number of items in the group.
   */
  "limit"?: number;
  /**
   * Define a sorting method.
   */
  "sort"?: LogQueryDefinitionGroupBySort;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    facet: {
      baseName: "facet",
      type: "string",
      required: true,
    },
    limit: {
      baseName: "limit",
      type: "number",
      format: "int64",
    },
    sort: {
      baseName: "sort",
      type: "LogQueryDefinitionGroupBySort",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return LogQueryDefinitionGroupBy.attributeTypeMap;
  }

  public constructor() {}
}
