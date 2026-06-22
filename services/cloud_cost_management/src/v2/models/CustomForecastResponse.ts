import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CustomForecastResponseData } from "./CustomForecastResponseData";

/**
 * Response object containing the custom forecast for a budget.
 */
export class CustomForecastResponse {
  /**
   * Custom forecast resource wrapper in a response.
   */
  "data": CustomForecastResponseData;
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
      type: "CustomForecastResponseData",
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
    return CustomForecastResponse.attributeTypeMap;
  }

  public constructor() {}
}
