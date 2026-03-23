import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CustomRuleRequestData } from "./CustomRuleRequestData";

/**
 * Request body for creating or updating a custom rule.
 */
export class CustomRuleRequest {
  /**
   * Data object for a custom rule create or update request.
   */
  "data"?: CustomRuleRequestData;
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
      type: "CustomRuleRequestData",
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
    return CustomRuleRequest.attributeTypeMap;
  }

  public constructor() {}
}
