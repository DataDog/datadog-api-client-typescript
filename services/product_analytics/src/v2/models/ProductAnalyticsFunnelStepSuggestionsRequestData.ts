import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsFunnelStepSuggestionsRequestAttributes } from "./ProductAnalyticsFunnelStepSuggestionsRequestAttributes";
import { ProductAnalyticsFunnelStepSuggestionsRequestType } from "./ProductAnalyticsFunnelStepSuggestionsRequestType";

/**
 * Data of a step suggestions request.
 */
export class ProductAnalyticsFunnelStepSuggestionsRequestData {
  /**
   * Attributes of a step suggestions request.
   */
  "attributes": ProductAnalyticsFunnelStepSuggestionsRequestAttributes;
  /**
   * Type of a step suggestions request.
   */
  "type": ProductAnalyticsFunnelStepSuggestionsRequestType;
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
    attributes: {
      baseName: "attributes",
      type: "ProductAnalyticsFunnelStepSuggestionsRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ProductAnalyticsFunnelStepSuggestionsRequestType",
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
    return ProductAnalyticsFunnelStepSuggestionsRequestData.attributeTypeMap;
  }

  public constructor() {}
}
