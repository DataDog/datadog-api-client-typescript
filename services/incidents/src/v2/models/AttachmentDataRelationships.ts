import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RelationshipToIncident } from "./RelationshipToIncident";
import { RelationshipToUser } from "./RelationshipToUser";

/**
 * The attachment's resource relationships.
 */
export class AttachmentDataRelationships {
  /**
   * Relationship to incident.
   */
  "incident"?: RelationshipToIncident;
  /**
   * Relationship to user.
   */
  "lastModifiedByUser"?: RelationshipToUser;
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
    incident: {
      baseName: "incident",
      type: "RelationshipToIncident",
    },
    lastModifiedByUser: {
      baseName: "last_modified_by_user",
      type: "RelationshipToUser",
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
    return AttachmentDataRelationships.attributeTypeMap;
  }

  public constructor() {}
}
