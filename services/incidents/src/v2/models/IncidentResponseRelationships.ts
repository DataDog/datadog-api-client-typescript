import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { NullableRelationshipToUser } from "./NullableRelationshipToUser";
import { RelationshipToIncidentAttachment } from "./RelationshipToIncidentAttachment";
import { RelationshipToIncidentImpacts } from "./RelationshipToIncidentImpacts";
import { RelationshipToIncidentIntegrationMetadatas } from "./RelationshipToIncidentIntegrationMetadatas";
import { RelationshipToIncidentResponders } from "./RelationshipToIncidentResponders";
import { RelationshipToIncidentUserDefinedFields } from "./RelationshipToIncidentUserDefinedFields";
import { RelationshipToUser } from "./RelationshipToUser";

/**
 * The incident's relationships from a response.
 */
export class IncidentResponseRelationships {
  /**
   * A relationship reference for attachments.
   */
  "attachments"?: RelationshipToIncidentAttachment;
  /**
   * Relationship to user.
   */
  "commanderUser"?: NullableRelationshipToUser;
  /**
   * Relationship to user.
   */
  "createdByUser"?: RelationshipToUser;
  /**
   * Relationship to user.
   */
  "declaredByUser"?: RelationshipToUser;
  /**
   * Relationship to impacts.
   */
  "impacts"?: RelationshipToIncidentImpacts;
  /**
   * A relationship reference for multiple integration metadata objects.
   */
  "integrations"?: RelationshipToIncidentIntegrationMetadatas;
  /**
   * Relationship to user.
   */
  "lastModifiedByUser"?: RelationshipToUser;
  /**
   * Relationship to incident responders.
   */
  "responders"?: RelationshipToIncidentResponders;
  /**
   * Relationship to incident user defined fields.
   */
  "userDefinedFields"?: RelationshipToIncidentUserDefinedFields;
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
    attachments: {
      baseName: "attachments",
      type: "RelationshipToIncidentAttachment",
    },
    commanderUser: {
      baseName: "commander_user",
      type: "NullableRelationshipToUser",
    },
    createdByUser: {
      baseName: "created_by_user",
      type: "RelationshipToUser",
    },
    declaredByUser: {
      baseName: "declared_by_user",
      type: "RelationshipToUser",
    },
    impacts: {
      baseName: "impacts",
      type: "RelationshipToIncidentImpacts",
    },
    integrations: {
      baseName: "integrations",
      type: "RelationshipToIncidentIntegrationMetadatas",
    },
    lastModifiedByUser: {
      baseName: "last_modified_by_user",
      type: "RelationshipToUser",
    },
    responders: {
      baseName: "responders",
      type: "RelationshipToIncidentResponders",
    },
    userDefinedFields: {
      baseName: "user_defined_fields",
      type: "RelationshipToIncidentUserDefinedFields",
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
    return IncidentResponseRelationships.attributeTypeMap;
  }

  public constructor() {}
}
