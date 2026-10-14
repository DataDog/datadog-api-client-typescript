import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CaseAggregateRequestData } from "./CaseAggregateRequestData";

/**
 * Request payload for aggregating work item counts with grouping. Use this to get faceted breakdowns of work items (for example, count of work items grouped by priority and status).
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
