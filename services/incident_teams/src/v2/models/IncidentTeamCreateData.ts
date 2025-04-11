import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentTeamCreateAttributes } from "./IncidentTeamCreateAttributes";
import { IncidentTeamRelationships } from "./IncidentTeamRelationships";
import { IncidentTeamType } from "./IncidentTeamType";

/**
 * Incident Team data for a create request.
 */
export class IncidentTeamCreateData {
  /**
   * The incident team's attributes for a create request.
   */
  "attributes"?: IncidentTeamCreateAttributes;
  /**
   * The incident team's relationships.
   */
  "relationships"?: IncidentTeamRelationships;
  /**
   * Incident Team resource type.
   */
  "type": IncidentTeamType;
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
      type: "IncidentTeamCreateAttributes",
    },
    relationships: {
      baseName: "relationships",
      type: "IncidentTeamRelationships",
    },
    type: {
      baseName: "type",
      type: "IncidentTeamType",
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
    return IncidentTeamCreateData.attributeTypeMap;
  }

  public constructor() {}
}
