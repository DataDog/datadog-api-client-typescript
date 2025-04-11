import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TeamType } from "./TeamType";
import { TeamUpdateAttributes } from "./TeamUpdateAttributes";
import { TeamUpdateRelationships } from "./TeamUpdateRelationships";

/**
 * Team update request
 */
export class TeamUpdate {
  /**
   * Team update attributes
   */
  "attributes": TeamUpdateAttributes;
  /**
   * Team update relationships
   */
  "relationships"?: TeamUpdateRelationships;
  /**
   * Team type
   */
  "type": TeamType;
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
      type: "TeamUpdateAttributes",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "TeamUpdateRelationships",
    },
    type: {
      baseName: "type",
      type: "TeamType",
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
    return TeamUpdate.attributeTypeMap;
  }

  public constructor() {}
}
