import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EscalationPolicyCreateRequestDataRelationshipsTeamsDataItemsType } from "./EscalationPolicyCreateRequestDataRelationshipsTeamsDataItemsType";

/**
 * Defines a single relationship to a team within an escalation policy creation request. Contains the team's `id` and `type`.
 */
export class EscalationPolicyCreateRequestDataRelationshipsTeamsDataItems {
  /**
   * Specifies the unique identifier for the related team.
   */
  "id": string;
  /**
   * Indicates that the resource is of type `teams`.
   */
  "type": EscalationPolicyCreateRequestDataRelationshipsTeamsDataItemsType;
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
      type: "EscalationPolicyCreateRequestDataRelationshipsTeamsDataItemsType",
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
    return EscalationPolicyCreateRequestDataRelationshipsTeamsDataItems.attributeTypeMap;
  }

  public constructor() {}
}
