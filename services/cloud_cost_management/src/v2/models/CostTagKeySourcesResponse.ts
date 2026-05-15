import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CostTagKeySource } from "./CostTagKeySource";

/**
 * List of Cloud Cost Management tag keys with their origin sources for the requested period.
 */
export class CostTagKeySourcesResponse {
  /**
   * List of tag keys with their origin sources.
   */
  "data": Array<CostTagKeySource>;
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
      type: "Array<CostTagKeySource>",
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
    return CostTagKeySourcesResponse.attributeTypeMap;
  }

  public constructor() {}
}
