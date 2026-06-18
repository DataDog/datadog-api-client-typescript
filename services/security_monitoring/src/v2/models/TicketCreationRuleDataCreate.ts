import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TicketCreationRuleAttributesCreate } from "./TicketCreationRuleAttributesCreate";
import { TicketCreationRuleType } from "./TicketCreationRuleType";

/**
 * The data object for a ticket creation rule create or update request.
 */
export class TicketCreationRuleDataCreate {
  /**
   * Attributes for creating or updating a ticket creation rule.
   */
  "attributes": TicketCreationRuleAttributesCreate;
  /**
   * The JSON:API type for ticket creation rules.
   */
  "type": TicketCreationRuleType;
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
    attributes: {
      baseName: "attributes",
      type: "TicketCreationRuleAttributesCreate",
      required: true,
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
    return TicketCreationRuleDataCreate.attributeTypeMap;
  }

  public constructor() {}
}
