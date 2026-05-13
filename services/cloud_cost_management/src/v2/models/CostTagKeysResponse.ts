import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CostTagKey } from "./CostTagKey";

/**
 * A list of Cloud Cost Management tag keys.
 */
export class CostTagKeysResponse {
  /**
   * The list of Cloud Cost Management tag keys.
   */
  "data": Array<CostTagKey>;
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
      type: "Array<CostTagKey>",
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
    return CostTagKeysResponse.attributeTypeMap;
  }

  public constructor() {}
}
