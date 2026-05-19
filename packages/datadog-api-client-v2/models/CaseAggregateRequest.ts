/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CaseAggregateRequestData } from "./CaseAggregateRequestData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Request payload for aggregating case counts with grouping. Use this to get faceted breakdowns of cases (for example, count of cases grouped by priority and status).
 */
export class CaseAggregateRequest {
  /**
   * Data object wrapping the aggregation query type and attributes.
   */
  "data": CaseAggregateRequestData;

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
    data: {
      baseName: "data",
      type: "CaseAggregateRequestData",
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
    return CaseAggregateRequest.attributeTypeMap;
  }

  public constructor() {}
}
