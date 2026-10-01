import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TicketCreationRuleDataUpdate } from "./TicketCreationRuleDataUpdate";

/**
 * The body of a ticket creation rule update request.
 */
export class TicketCreationRuleUpdateRequest {
  /**
   * The data object for a ticket creation rule update request. The `id` must match the `rule_id` path parameter.
   */
  "data": TicketCreationRuleDataUpdate;
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
      type: "TicketCreationRuleDataUpdate",
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
    return TicketCreationRuleUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
