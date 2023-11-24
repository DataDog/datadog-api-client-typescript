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
export class ScalarFormulaResponseAttributes {
  /**
   * List of response columns, each corresponding to an individual formula or query in the request and with values in parallel arrays matching the series list.
   */
  "columns"?: Array<ScalarColumn>;

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
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ScalarFormulaResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
