/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A metric-based SLO. **Required if type is `metric`**. Note that Datadog only allows the sum by aggregator
 * to be used because this will sum up all request counts instead of averaging them, or taking the max or
 * min of all of those requests.
 */
export class ServiceLevelObjectiveQuery {
  /**
   * A Datadog metric query for total (valid) events.
   */
  "denominator": string;
  /**
   * A Datadog metric query for good events.
   */
  "numerator": string;

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
    denominator: {
      baseName: "denominator",
      type: "string",
      required: true,
    },
    numerator: {
      baseName: "numerator",
      type: "string",
      required: true,
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
    return ServiceLevelObjectiveQuery.attributeTypeMap;
  }

  public constructor() {}
}
