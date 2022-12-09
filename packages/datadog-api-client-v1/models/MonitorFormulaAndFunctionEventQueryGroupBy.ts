/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MonitorFormulaAndFunctionEventQueryGroupBySort } from "./MonitorFormulaAndFunctionEventQueryGroupBySort";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * List of objects used to group by.
 */
export class MonitorFormulaAndFunctionEventQueryGroupBy {
  /**
   * Event facet.
   */
  "facet": string;
  /**
   * Number of groups to return.
   */
  "limit"?: number;
  /**
   * Options for sorting group by results.
   */
  "sort"?: MonitorFormulaAndFunctionEventQueryGroupBySort;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

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
      type: "MonitorFormulaAndFunctionEventQueryGroupBySort",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MonitorFormulaAndFunctionEventQueryGroupBy.attributeTypeMap;
  }

  public constructor() {}
}
