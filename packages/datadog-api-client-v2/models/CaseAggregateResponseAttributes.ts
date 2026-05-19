/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CaseAggregateGroup } from "./CaseAggregateGroup";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of the aggregation result, including the total count across all groups and the per-group breakdowns.
 */
export class CaseAggregateResponseAttributes {
  /**
   * Aggregated groups.
   */
  "groups": Array<CaseAggregateGroup>;
  /**
   * Total count of aggregated cases.
   */
  "total": number;

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
    groups: {
      baseName: "groups",
      type: "Array<CaseAggregateGroup>",
      required: true,
    },
    total: {
      baseName: "total",
      type: "number",
      required: true,
      format: "double",
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
    return CaseAggregateResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
