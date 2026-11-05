import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayBudgetPeriodResource } from "./AiGatewayBudgetPeriodResource";

/**
 * Response containing an AI Gateway budget's active period.
 */
export class AiGatewayBudgetPeriodResponse {
  /**
   * Active accounting period for an AI Gateway budget.
   */
  "data": AiGatewayBudgetPeriodResource;
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
      type: "AiGatewayBudgetPeriodResource",
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
    return AiGatewayBudgetPeriodResponse.attributeTypeMap;
  }

  public constructor() {}
}
