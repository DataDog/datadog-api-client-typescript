import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TicketCreationRuleDataResponse } from "./TicketCreationRuleDataResponse";

/**
 * A single ticket creation rule response.
 */
export class TicketCreationRuleResponse {
  /**
   * The data object for a ticket creation rule returned by the API.
   */
  "data": TicketCreationRuleDataResponse;
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
      type: "TicketCreationRuleDataResponse",
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
    return TicketCreationRuleResponse.attributeTypeMap;
  }

  public constructor() {}
}
