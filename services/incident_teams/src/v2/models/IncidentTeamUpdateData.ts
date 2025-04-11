import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentTeamRelationships } from "./IncidentTeamRelationships";
import { IncidentTeamType } from "./IncidentTeamType";
import { IncidentTeamUpdateAttributes } from "./IncidentTeamUpdateAttributes";

/**
 * Incident Team data for an update request.
 */
export class IncidentTeamUpdateData {
  /**
   * The incident team's attributes for an update request.
   */
  "attributes"?: IncidentTeamUpdateAttributes;
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
      type: "IncidentTeamUpdateAttributes",
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
    return IncidentTeamUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
