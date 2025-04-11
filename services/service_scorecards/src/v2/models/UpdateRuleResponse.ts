import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UpdateRuleResponseData } from "./UpdateRuleResponseData";

/**
 * The response from a rule update request.
 */
export class UpdateRuleResponse {
  /**
   * The data for a rule update response.
   */
  "data"?: UpdateRuleResponseData;
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
      type: "UpdateRuleResponseData",
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
    return UpdateRuleResponse.attributeTypeMap;
  }

  public constructor() {}
}
