import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ChangeRequestDecisionsRelationship } from "./ChangeRequestDecisionsRelationship";

/**
 * Relationships for updating a change request decision.
 */
export class ChangeRequestDecisionUpdateDataRelationships {
  /**
   * Relationship to change request decisions.
   */
  "changeRequestDecisions": ChangeRequestDecisionsRelationship;
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
    changeRequestDecisions: {
      baseName: "change_request_decisions",
      type: "ChangeRequestDecisionsRelationship",
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
    return ChangeRequestDecisionUpdateDataRelationships.attributeTypeMap;
  }

  public constructor() {}
}
