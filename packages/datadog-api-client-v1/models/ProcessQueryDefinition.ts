/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The process query to use in the widget.
 */
export class ProcessQueryDefinition {
  /**
   * List of processes.
   */
  "filterBy"?: Array<string>;
  /**
   * Max number of items in the filter list.
   */
  "limit"?: number;
  /**
   * Your chosen metric.
   */
  "metric": string;
  /**
   * Your chosen search term.
   */
  "searchBy"?: string;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    filterBy: {
      baseName: "filter_by",
      type: "Array<string>",
    },
    limit: {
      baseName: "limit",
      type: "number",
      format: "int64",
    },
    metric: {
      baseName: "metric",
      type: "string",
      required: true,
    },
    searchBy: {
      baseName: "search_by",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ProcessQueryDefinition.attributeTypeMap;
  }

  public constructor() {}
}
