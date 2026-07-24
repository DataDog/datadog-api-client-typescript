import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { PostmortemTemplateIncidentTypeRelationship } from "./PostmortemTemplateIncidentTypeRelationship";
import { PostmortemTemplateUserRelationship } from "./PostmortemTemplateUserRelationship";

/**
 * Relationships of a postmortem template returned in a response.
 */
export class PostmortemTemplateResponseRelationships {
  /**
   * Relationship to the incident type this template belongs to.
   */
  "incidentType"?: PostmortemTemplateIncidentTypeRelationship;
  /**
   * Relationship to a user.
   */
  "lastModifiedByUser"?: PostmortemTemplateUserRelationship;
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
    incidentType: {
      baseName: "incident_type",
      type: "PostmortemTemplateIncidentTypeRelationship",
    },
    lastModifiedByUser: {
      baseName: "last_modified_by_user",
      type: "PostmortemTemplateUserRelationship",
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
    return PostmortemTemplateResponseRelationships.attributeTypeMap;
  }

  public constructor() {}
}
