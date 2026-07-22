import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MuteRuleDataResponse } from "./MuteRuleDataResponse";

/**
 * A single mute rule response.
 */
export class MuteRuleResponse {
  /**
   * The data object for a mute rule returned by the API.
   */
  "data": MuteRuleDataResponse;
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
    data: {
      baseName: "data",
      type: "MuteRuleDataResponse",
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
    return MuteRuleResponse.attributeTypeMap;
  }

  public constructor() {}
}
