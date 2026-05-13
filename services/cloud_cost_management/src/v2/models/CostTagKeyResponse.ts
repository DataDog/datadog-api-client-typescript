import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CostTagKey } from "./CostTagKey";

/**
 * A single Cloud Cost Management tag key.
 */
export class CostTagKeyResponse {
  /**
   * A Cloud Cost Management tag key.
   */
  "data": CostTagKey;
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
      type: "CostTagKey",
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
    return CostTagKeyResponse.attributeTypeMap;
  }

  public constructor() {}
}
