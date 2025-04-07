import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UpdateRuleRequestData } from "./UpdateRuleRequestData";

/**
 * Request to update a scorecard rule.
 */
export class UpdateRuleRequest {
  /**
   * Data for the request to update a scorecard rule.
   */
  "data"?: UpdateRuleRequestData;
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
      type: "UpdateRuleRequestData",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return UpdateRuleRequest.attributeTypeMap;
  }

  public constructor() {}
}
