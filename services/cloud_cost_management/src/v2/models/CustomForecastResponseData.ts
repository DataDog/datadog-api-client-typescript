import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CustomForecastResponseDataAttributes } from "./CustomForecastResponseDataAttributes";
import { CustomForecastType } from "./CustomForecastType";

/**
 * Custom forecast resource wrapper in a response.
 */
export class CustomForecastResponseData {
  /**
   * Attributes of a custom forecast.
   */
  "attributes": CustomForecastResponseDataAttributes;
  /**
   * The unique identifier of the custom forecast.
   */
  "id": string;
  /**
   * The type of the custom forecast resource. Must be `custom_forecast`.
   */
  "type": CustomForecastType;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      baseName: "attributes",
      type: "CustomForecastResponseDataAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "CustomForecastType",
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
    return CustomForecastResponseData.attributeTypeMap;
  }

  public constructor() {}
}
