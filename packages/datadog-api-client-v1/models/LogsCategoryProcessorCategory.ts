/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LogsFilter } from "./LogsFilter";

import { AttributeTypeMap } from "../util";

/**
 * Object describing the logs filter.
 */
export class LogsCategoryProcessorCategory {
  /**
   * Filter for logs.
   */
  "filter"?: LogsFilter;
  /**
   * Value to assign to the target attribute.
   */
  "name"?: string;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    filter: {
      baseName: "filter",
      type: "LogsFilter",
    },
    name: {
      baseName: "name",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return LogsCategoryProcessorCategory.attributeTypeMap;
  }

  public constructor() {}
}
