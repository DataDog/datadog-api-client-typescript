import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsSankeyRequestAttributes } from "./ProductAnalyticsSankeyRequestAttributes";
import { ProductAnalyticsSankeyRequestType } from "./ProductAnalyticsSankeyRequestType";

export class ProductAnalyticsSankeyRequestData {
  /**
   * Attributes for a Sankey request.
   */
  "attributes": ProductAnalyticsSankeyRequestAttributes;
  "type": ProductAnalyticsSankeyRequestType;
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
      type: "ProductAnalyticsSankeyRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ProductAnalyticsSankeyRequestType",
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
    return ProductAnalyticsSankeyRequestData.attributeTypeMap;
  }

  public constructor() {}
}
