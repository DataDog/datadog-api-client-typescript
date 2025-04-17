import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EscalationPolicyDataRelationshipsTeamsDataItemsType } from "./EscalationPolicyDataRelationshipsTeamsDataItemsType";

/**
 * Defines a relationship to a single team within an escalation policy. Contains the team's `id` and `type`.
 */
export class EscalationPolicyDataRelationshipsTeamsDataItems {
  /**
   * Specifies the unique identifier for the team resource.
   */
  "id": string;
  /**
   * Indicates that the resource is of type `teams`.
   */
  "type": EscalationPolicyDataRelationshipsTeamsDataItemsType;
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
      type: "EscalationPolicyDataRelationshipsTeamsDataItemsType",
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
    return EscalationPolicyDataRelationshipsTeamsDataItems.attributeTypeMap;
  }

  public constructor() {}
}
