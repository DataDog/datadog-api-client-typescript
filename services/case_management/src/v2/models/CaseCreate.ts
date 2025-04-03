import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CaseCreateAttributes } from "./CaseCreateAttributes";
import { CaseCreateRelationships } from "./CaseCreateRelationships";
import { CaseResourceType } from "./CaseResourceType";

/**
 * Case creation data
 */
export class CaseCreate {
  /**
   * Case creation attributes
   */
  "attributes": CaseCreateAttributes;
  /**
   * Relationships formed with the case on creation
   */
  "relationships"?: CaseCreateRelationships;
  /**
   * Case resource type
   */
  "type": CaseResourceType;
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
      type: "CaseCreateAttributes",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "CaseCreateRelationships",
    },
    type: {
      baseName: "type",
      type: "CaseResourceType",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CaseCreate.attributeTypeMap;
  }

  public constructor() {}
}
