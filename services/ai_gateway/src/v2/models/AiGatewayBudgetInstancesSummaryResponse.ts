import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayBudgetInstancesSummaryResource } from "./AiGatewayBudgetInstancesSummaryResource";

/**
 * Response containing aggregate state across budget instance counters.
 */
export class AiGatewayBudgetInstancesSummaryResponse {
  /**
   * Aggregate state across budget instance counters.
   */
  "data": AiGatewayBudgetInstancesSummaryResource;
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
      type: "AiGatewayBudgetInstancesSummaryResource",
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
    return AiGatewayBudgetInstancesSummaryResponse.attributeTypeMap;
  }

  public constructor() {}
}
