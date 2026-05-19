/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CaseAggregateGroupBy } from "./CaseAggregateGroupBy";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes for the aggregation request, including the search query and grouping configuration.
 */
export class CaseAggregateRequestAttributes {
  /**
   * Configuration for grouping aggregated results by one or more case fields.
   */
  "groupBy": CaseAggregateGroupBy;
  /**
   * A search query to filter which cases are included in the aggregation. Uses the same syntax as the Case Management search bar.
   */
  "queryFilter": string;

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
    groupBy: {
      baseName: "group_by",
      type: "CaseAggregateGroupBy",
      required: true,
    },
    queryFilter: {
      baseName: "query_filter",
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
    return CaseAggregateRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
