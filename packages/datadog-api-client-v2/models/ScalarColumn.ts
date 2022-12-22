/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { Unit } from "./Unit";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A single column in a scalar query response.
 */
export class ScalarColumn {
  /**
   * List of units.
   */
  "unit"?: Array<Unit>;
  /**
   * Array of values for each group-by combination that results from one formula or query.
   */
  "values"?: Array<number>;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    unit: {
      baseName: "unit",
      type: "Array<Unit>",
    },
    values: {
      baseName: "values",
      type: "Array<number>",
      format: "double",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ScalarColumn.attributeTypeMap;
  }

  public constructor() {}
}
