import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ChangeRequestDecisionUpdateDataAttributes } from "./ChangeRequestDecisionUpdateDataAttributes";
import { ChangeRequestDecisionUpdateDataRelationships } from "./ChangeRequestDecisionUpdateDataRelationships";
import { ChangeRequestResourceType } from "./ChangeRequestResourceType";

/**
 * Data object to update a change request decision.
 */
export class ChangeRequestDecisionUpdateData {
  /**
   * Attributes of the parent change request for a decision update.
   */
  "attributes"?: ChangeRequestDecisionUpdateDataAttributes;
  /**
   * Relationships for updating a change request decision.
   */
  "relationships"?: ChangeRequestDecisionUpdateDataRelationships;
  /**
   * Change request resource type.
   */
  "type": ChangeRequestResourceType;
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
      type: "ChangeRequestDecisionUpdateDataAttributes",
    },
    relationships: {
      baseName: "relationships",
      type: "ChangeRequestDecisionUpdateDataRelationships",
    },
    type: {
      baseName: "type",
      type: "ChangeRequestResourceType",
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
    return ChangeRequestDecisionUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
