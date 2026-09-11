import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { InboxRuleDataResponse } from "./InboxRuleDataResponse";

/**
 * A single inbox rule response.
 */
export class InboxRuleResponse {
  /**
   * The data object for an inbox rule returned by the API.
   */
  "data": InboxRuleDataResponse;
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
      type: "InboxRuleDataResponse",
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
    return InboxRuleResponse.attributeTypeMap;
  }

  public constructor() {}
}
