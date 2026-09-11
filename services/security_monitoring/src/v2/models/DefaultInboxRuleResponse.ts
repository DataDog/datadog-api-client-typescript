import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DefaultInboxRuleDataResponse } from "./DefaultInboxRuleDataResponse";

/**
 * A single default inbox rule response.
 */
export class DefaultInboxRuleResponse {
  /**
   * The data object for a default inbox rule returned by the API.
   */
  "data": DefaultInboxRuleDataResponse;
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
      type: "DefaultInboxRuleDataResponse",
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
    return DefaultInboxRuleResponse.attributeTypeMap;
  }

  public constructor() {}
}
