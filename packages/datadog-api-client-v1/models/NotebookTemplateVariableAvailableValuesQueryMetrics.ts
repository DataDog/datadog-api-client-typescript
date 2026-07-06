/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Available values query for the metrics data source.
 */
export class NotebookTemplateVariableAvailableValuesQueryMetrics {
  /**
   * The data source for the query. Must be `metrics`.
   */
  "dataSource": string;
  /**
   * The metrics query string.
   */
  "query": string;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    dataSource: {
      baseName: "data_source",
      type: "string",
      required: true,
    },
    query: {
      baseName: "query",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return NotebookTemplateVariableAvailableValuesQueryMetrics.attributeTypeMap;
  }

  public constructor() {}
}
