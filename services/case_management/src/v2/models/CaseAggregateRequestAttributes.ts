import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CaseAggregateGroupBy } from "./CaseAggregateGroupBy";

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
