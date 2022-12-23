/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { Unit } from "./Unit";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**

*/
export class TimeseriesResponseSeries {
  /**
   * List of tags that apply to a single response value.
   */
  "groupTags"?: Array<string>;
  /**
   * The index of the query in the "formulas" array (or "queries" array if no "formulas" was specified).
   */
  "queryIndex"?: number;
  /**
   * List of units.
   */
  "unit"?: Array<Unit>;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    groupTags: {
      baseName: "group_tags",
      type: "Array<string>",
    },
    queryIndex: {
      baseName: "query_index",
      type: "number",
      format: "int32",
    },
    unit: {
      baseName: "unit",
      type: "Array<Unit>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TimeseriesResponseSeries.attributeTypeMap;
  }

  public constructor() {}
}
