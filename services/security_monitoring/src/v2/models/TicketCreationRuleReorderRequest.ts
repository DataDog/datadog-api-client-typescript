import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TicketCreationRuleReorderItem } from "./TicketCreationRuleReorderItem";

/**
 * The body of the ticket creation rule reorder request.
 */
export class TicketCreationRuleReorderRequest {
  /**
   * The ordered list of all ticket creation rules; every rule must be included.
   */
  "data": Array<TicketCreationRuleReorderItem>;
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
      type: "Array<TicketCreationRuleReorderItem>",
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
    return TicketCreationRuleReorderRequest.attributeTypeMap;
  }

  public constructor() {}
}
