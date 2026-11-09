/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SpansAggregateBucketValue } from "./SpansAggregateBucketValue";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
