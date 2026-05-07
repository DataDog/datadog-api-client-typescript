import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CostSettingData } from "./CostSettingData";

/**
 * Response for a cost setting.
 */
export class CostSettingResponse {
  /**
   * Cost setting data object.
   */
  "data": CostSettingData;
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
      type: "CostSettingData",
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
    return CostSettingResponse.attributeTypeMap;
  }

  public constructor() {}
}
