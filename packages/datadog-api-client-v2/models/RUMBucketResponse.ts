/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RUMAggregateBucketValue } from "./RUMAggregateBucketValue";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Bucket values.
 */
export class RUMBucketResponse {
  /**
   * The key-value pairs for each group-by.
   */
  "by"?: { [key: string]: string };
  /**
   * A map of the metric name to value for regular compute, or a list of values for a timeseries.
   */
  "computes"?: { [key: string]: RUMAggregateBucketValue };

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
      type: "{ [key: string]: string; }",
    },
    computes: {
      baseName: "computes",
      type: "{ [key: string]: RUMAggregateBucketValue; }",
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
    return RUMBucketResponse.attributeTypeMap;
  }

  public constructor() {}
}
