import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentTeamRelationships } from "./IncidentTeamRelationships";
import { IncidentTeamResponseAttributes } from "./IncidentTeamResponseAttributes";
import { IncidentTeamType } from "./IncidentTeamType";

/**
 * Incident Team data from a response.
 */
export class IncidentTeamResponseData {
  /**
   * The incident team's attributes from a response.
   */
  "attributes"?: IncidentTeamResponseAttributes;
  /**
   * The incident team's ID.
   */
  "id"?: string;
  /**
   * The incident team's relationships.
   */
  "relationships"?: IncidentTeamRelationships;
  /**
   * Incident Team resource type.
   */
  "type"?: IncidentTeamType;
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
      type: "IncidentTeamResponseAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    relationships: {
      baseName: "relationships",
      type: "IncidentTeamRelationships",
    },
    type: {
      baseName: "type",
      type: "IncidentTeamType",
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
    return IncidentTeamResponseData.attributeTypeMap;
  }

  public constructor() {}
}
