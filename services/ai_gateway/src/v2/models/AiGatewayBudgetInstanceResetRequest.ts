import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayBudgetInstanceResetData } from "./AiGatewayBudgetInstanceResetData";

/**
 * Request to reset one budget instance's active-period spend.
 */
export class AiGatewayBudgetInstanceResetRequest {
  /**
   * Data used to reset one budget instance's active-period spend.
   */
  "data": AiGatewayBudgetInstanceResetData;
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
      type: "AiGatewayBudgetInstanceResetData",
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
    return AiGatewayBudgetInstanceResetRequest.attributeTypeMap;
  }

  public constructor() {}
}
