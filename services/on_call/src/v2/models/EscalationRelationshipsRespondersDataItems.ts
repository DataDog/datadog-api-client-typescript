import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EscalationRelationshipsRespondersDataItemsType } from "./EscalationRelationshipsRespondersDataItemsType";

/**
 * Represents a user assigned to an escalation step.
 */
export class EscalationRelationshipsRespondersDataItems {
  /**
   * Unique identifier of the user assigned to the escalation step.
   */
  "id": string;
  /**
   * Represents the resource type for users assigned as responders in an escalation step.
   */
  "type": EscalationRelationshipsRespondersDataItemsType;
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
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "EscalationRelationshipsRespondersDataItemsType",
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
    return EscalationRelationshipsRespondersDataItems.attributeTypeMap;
  }

  public constructor() {}
}
