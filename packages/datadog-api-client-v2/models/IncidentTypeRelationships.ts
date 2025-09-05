/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentTypeRelationshipsGoogleMeetConfiguration } from "./IncidentTypeRelationshipsGoogleMeetConfiguration";
import { IncidentTypeRelationshipsMicrosoftTeamsConfiguration } from "./IncidentTypeRelationshipsMicrosoftTeamsConfiguration";
import { IncidentTypeRelationshipsZoomConfiguration } from "./IncidentTypeRelationshipsZoomConfiguration";
import { RelationshipToUser } from "./RelationshipToUser";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The incident type's resource relationships.
 */
export class IncidentTypeRelationships {
  /**
   * Relationship to user.
   */
  "createdByUser"?: RelationshipToUser;
  /**
   * The definition of `IncidentTypeRelationshipsGoogleMeetConfiguration` object.
   */
  "googleMeetConfiguration"?: IncidentTypeRelationshipsGoogleMeetConfiguration;
  /**
   * Relationship to user.
   */
  "lastModifiedByUser"?: RelationshipToUser;
  /**
   * The definition of `IncidentTypeRelationshipsMicrosoftTeamsConfiguration` object.
   */
  "microsoftTeamsConfiguration"?: IncidentTypeRelationshipsMicrosoftTeamsConfiguration;
  /**
   * The definition of `IncidentTypeRelationshipsZoomConfiguration` object.
   */
  "zoomConfiguration"?: IncidentTypeRelationshipsZoomConfiguration;

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
    createdByUser: {
      baseName: "created_by_user",
      type: "RelationshipToUser",
    },
    googleMeetConfiguration: {
      baseName: "google_meet_configuration",
      type: "IncidentTypeRelationshipsGoogleMeetConfiguration",
    },
    lastModifiedByUser: {
      baseName: "last_modified_by_user",
      type: "RelationshipToUser",
    },
    microsoftTeamsConfiguration: {
      baseName: "microsoft_teams_configuration",
      type: "IncidentTypeRelationshipsMicrosoftTeamsConfiguration",
    },
    zoomConfiguration: {
      baseName: "zoom_configuration",
      type: "IncidentTypeRelationshipsZoomConfiguration",
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
    return IncidentTypeRelationships.attributeTypeMap;
  }

  public constructor() {}
}
