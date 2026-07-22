import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TicketCreationRuleType } from "./TicketCreationRuleType";

/**
 * A reference to a ticket creation rule used for reordering.
 */
export class TicketCreationRuleReorderItem {
  /**
   * The ID of the automation rule.
   */
  "id": string;
  /**
   * The JSON:API type for ticket creation rules.
   */
  "type": TicketCreationRuleType;
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
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "TicketCreationRuleType",
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
    return TicketCreationRuleReorderItem.attributeTypeMap;
  }

  public constructor() {}
}
