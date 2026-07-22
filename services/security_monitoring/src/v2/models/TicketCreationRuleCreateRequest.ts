import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TicketCreationRuleDataCreate } from "./TicketCreationRuleDataCreate";

/**
 * The body of a ticket creation rule create request.
 */
export class TicketCreationRuleCreateRequest {
  /**
   * The data object for a ticket creation rule create or update request.
   */
  "data": TicketCreationRuleDataCreate;
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
      type: "TicketCreationRuleDataCreate",
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
    return TicketCreationRuleCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
