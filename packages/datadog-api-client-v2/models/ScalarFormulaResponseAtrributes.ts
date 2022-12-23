/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ScalarColumn } from "./ScalarColumn";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The object describing a scalar response.
 */
export class ScalarFormulaResponseAtrributes {
  /**
   * List of response columns, each corresponding to an individual formula or query in the request and with values in parallel arrays matching the series list.
   */
  "columns"?: Array<ScalarColumn>;
  /**
   * List of group-by tags for the response. Parallel array to the values in each scalar column.
   */
  "series"?: Array<Array<string>>;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    columns: {
      baseName: "columns",
      type: "Array<ScalarColumn>",
    },
    series: {
      baseName: "series",
      type: "Array<Array<string>>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ScalarFormulaResponseAtrributes.attributeTypeMap;
  }

  public constructor() {}
}
