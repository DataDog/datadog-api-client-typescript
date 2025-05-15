import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TeamRoutingRulesDataRelationships } from "./TeamRoutingRulesDataRelationships";
import { TeamRoutingRulesDataType } from "./TeamRoutingRulesDataType";

/**
 * Represents the top-level data object for team routing rules, containing the ID, relationships, and resource type.
 */
export class TeamRoutingRulesData {
  /**
   * Specifies the unique identifier of this team routing rules record.
   */
  "id"?: string;
  /**
   * Specifies relationships for team routing rules, including rule references.
   */
  "relationships"?: TeamRoutingRulesDataRelationships;
  /**
   * Team routing rules resource type.
   */
  "type": TeamRoutingRulesDataType;
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
    },
    relationships: {
      baseName: "relationships",
      type: "TeamRoutingRulesDataRelationships",
    },
    type: {
      baseName: "type",
      type: "TeamRoutingRulesDataType",
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
    return TeamRoutingRulesData.attributeTypeMap;
  }

  public constructor() {}
}
