import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CaseCreateAttributes } from "./CaseCreateAttributes";
import { CaseCreateRelationships } from "./CaseCreateRelationships";
import { CaseResourceType } from "./CaseResourceType";

/**
 * Work item creation data
 */
export class CaseCreate {
  /**
   * Work item creation attributes
   */
  "attributes": CaseCreateAttributes;
  /**
   * Relationships formed with the work item on creation
   */
  "relationships"?: CaseCreateRelationships;
  /**
   * JSON:API resource type for work items.
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
      type: "{ [key: string]: any; }",
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
