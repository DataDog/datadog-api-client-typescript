import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EscalationRelationshipsResponders } from "./EscalationRelationshipsResponders";

/**
 * Contains the relationships of an escalation object, including its responders.
 */
export class EscalationRelationships {
  /**
   * Lists the users involved in a specific step of the escalation policy.
   */
  "responders"?: EscalationRelationshipsResponders;
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
    responders: {
      baseName: "responders",
      type: "EscalationRelationshipsResponders",
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
    return EscalationRelationships.attributeTypeMap;
  }

  public constructor() {}
}
