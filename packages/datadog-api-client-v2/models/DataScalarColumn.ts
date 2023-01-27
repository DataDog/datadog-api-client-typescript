/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ScalarMeta } from "./ScalarMeta";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A column containing the numerical results for a formula or query.
 */
export class DataScalarColumn {
  /**
   * Metadata for the resulting numerical values.
   */
  "meta"?: ScalarMeta;
  /**
   * The name referencing the formula or query for this column.
   */
  "name"?: string;
  /**
   * The type of column present.
   */
  "type"?: string;
  /**
   * The array of numerical values for one formula or query.
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
    meta: {
      baseName: "meta",
      type: "ScalarMeta",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "string",
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
    return DataScalarColumn.attributeTypeMap;
  }

  public constructor() {}
}
