import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ScalarColumnTypeNumber } from "./ScalarColumnTypeNumber";
import { ScalarMeta } from "./ScalarMeta";

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
   * The type of column present for numbers.
   */
  "type"?: ScalarColumnTypeNumber;
  /**
   * The array of numerical values for one formula or query.
   */
  "values"?: Array<number | null>;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };
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
      type: "ScalarColumnTypeNumber",
    },
    values: {
      baseName: "values",
      type: "Array<number>",
      format: "double",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
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
