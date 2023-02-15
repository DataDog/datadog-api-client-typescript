/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { WidgetFieldSort } from "./WidgetFieldSort";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Updated SLO List widget.
 */
export class SLOListWidgetQuery {
  /**
   * Maximum number of results to display in the table.
   */
  "limit"?: number;
  /**
   * Widget query.
   */
  "queryString": string;
  /**
   * Options for sorting results.
   */
  "sort"?: Array<WidgetFieldSort>;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    limit: {
      baseName: "limit",
      type: "number",
      format: "int64",
    },
    queryString: {
      baseName: "query_string",
      type: "string",
      required: true,
    },
    sort: {
      baseName: "sort",
      type: "Array<WidgetFieldSort>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SLOListWidgetQuery.attributeTypeMap;
  }

  public constructor() {}
}
