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
   * The compute data.
   */
  "compute"?: any;
  /**
   * A map of the metric name -> value for regular compute or list of values for a timeseries.
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
