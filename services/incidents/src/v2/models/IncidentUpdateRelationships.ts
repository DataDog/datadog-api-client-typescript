import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { NullableRelationshipToUser } from "./NullableRelationshipToUser";
import { RelationshipToIncidentIntegrationMetadatas } from "./RelationshipToIncidentIntegrationMetadatas";
import { RelationshipToIncidentPostmortem } from "./RelationshipToIncidentPostmortem";

/**
 * The incident's relationships for an update request.
 */
export class IncidentUpdateRelationships {
  /**
   * Relationship to user.
   */
  "commanderUser"?: NullableRelationshipToUser;
  /**
   * A relationship reference for multiple integration metadata objects.
   */
  "integrations"?: RelationshipToIncidentIntegrationMetadatas;
  /**
   * A relationship reference for postmortems.
   */
  "postmortem"?: RelationshipToIncidentPostmortem;
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
    commanderUser: {
      baseName: "commander_user",
      type: "NullableRelationshipToUser",
    },
    integrations: {
      baseName: "integrations",
      type: "RelationshipToIncidentIntegrationMetadatas",
    },
    postmortem: {
      baseName: "postmortem",
      type: "RelationshipToIncidentPostmortem",
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
    return IncidentUpdateRelationships.attributeTypeMap;
  }

  public constructor() {}
}
