import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TeamRoutingRulesDataRelationshipsRulesDataItemsType } from "./TeamRoutingRulesDataRelationshipsRulesDataItemsType";

/**
 * Defines a relationship item to link a routing rule by its ID and type.
 */
export class TeamRoutingRulesDataRelationshipsRulesDataItems {
  /**
   * Specifies the unique identifier for the related routing rule.
   */
  "id": string;
  /**
   * Indicates that the resource is of type 'team_routing_rules'.
   */
  "type": TeamRoutingRulesDataRelationshipsRulesDataItemsType;
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
      type: "TeamRoutingRulesDataRelationshipsRulesDataItemsType",
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
    return TeamRoutingRulesDataRelationshipsRulesDataItems.attributeTypeMap;
  }

  public constructor() {}
}
