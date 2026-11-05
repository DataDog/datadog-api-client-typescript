import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayBudgetInstanceCapacityOverrideData } from "./AiGatewayBudgetInstanceCapacityOverrideData";

/**
 * Request to override one budget instance's active-period capacity.
 */
export class AiGatewayBudgetInstanceCapacityOverrideRequest {
  /**
   * Data used to override one budget instance's active-period capacity.
   */
  "data": AiGatewayBudgetInstanceCapacityOverrideData;
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
      type: "AiGatewayBudgetInstanceCapacityOverrideData",
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
    return AiGatewayBudgetInstanceCapacityOverrideRequest.attributeTypeMap;
  }

  public constructor() {}
}
