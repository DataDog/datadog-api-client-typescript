import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CaseAggregateGroup } from "./CaseAggregateGroup";

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
