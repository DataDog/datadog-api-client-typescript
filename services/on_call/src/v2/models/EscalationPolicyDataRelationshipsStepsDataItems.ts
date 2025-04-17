import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EscalationPolicyDataRelationshipsStepsDataItemsType } from "./EscalationPolicyDataRelationshipsStepsDataItemsType";

/**
 * Defines a relationship to a single step within an escalation policy. Contains the step's `id` and `type`.
 */
export class EscalationPolicyDataRelationshipsStepsDataItems {
  /**
   * Specifies the unique identifier for the step resource.
   */
  "id": string;
  /**
   * Indicates that the resource is of type `steps`.
   */
  "type": EscalationPolicyDataRelationshipsStepsDataItemsType;
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
      type: "EscalationPolicyDataRelationshipsStepsDataItemsType",
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
    return EscalationPolicyDataRelationshipsStepsDataItems.attributeTypeMap;
  }

  public constructor() {}
}
