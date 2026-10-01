import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TicketCreationRuleAttributesCreate } from "./TicketCreationRuleAttributesCreate";
import { TicketCreationRuleType } from "./TicketCreationRuleType";

/**
 * The data object for a ticket creation rule update request. The `id` must match the `rule_id` path parameter.
 */
export class TicketCreationRuleDataUpdate {
  /**
   * Attributes for creating or updating a ticket creation rule.
   */
  "attributes": TicketCreationRuleAttributesCreate;
  /**
   * The ID of the ticket creation rule to update.
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
    return TicketCreationRuleDataUpdate.attributeTypeMap;
  }

  public constructor() {}
}
