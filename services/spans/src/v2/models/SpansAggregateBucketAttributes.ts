import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SpansAggregateBucketValue } from "./SpansAggregateBucketValue";

/**
 * A bucket values.
 */
export class SpansAggregateBucketAttributes {
  /**
   * The key, value pairs for each group by.
   */
  "by"?: { [key: string]: any };
  /**
   * Map of compute ID (`c0`, `c1`, ... in request order) to the computed value, or to a list of
   * `{time, value}` points for a `timeseries` compute.
   */
  "compute"?: any;
  /**
   * Not returned by this endpoint. Read the values from `compute` instead.
   */
  "computes"?: { [key: string]: SpansAggregateBucketValue };
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
    by: {
      baseName: "by",
      type: "{ [key: string]: any; }",
    },
    compute: {
      baseName: "compute",
      type: "any",
    },
    computes: {
      baseName: "computes",
      type: "{ [key: string]: SpansAggregateBucketValue; }",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SpansAggregateBucketAttributes.attributeTypeMap;
  }

  public constructor() {}
}
