/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GoogleMeetConfigurationReference } from "./GoogleMeetConfigurationReference";
import { MicrosoftTeamsConfigurationReference } from "./MicrosoftTeamsConfigurationReference";
import { RelationshipToUser } from "./RelationshipToUser";
import { ZoomConfigurationReference } from "./ZoomConfigurationReference";

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
   * A reference to a Google Meet Configuration resource.
   */
  "googleMeetConfiguration"?: GoogleMeetConfigurationReference;
  /**
   * Relationship to user.
   */
  "lastModifiedByUser"?: RelationshipToUser;
  /**
   * A reference to a Microsoft Teams Configuration resource.
   */
  "microsoftTeamsConfiguration"?: MicrosoftTeamsConfigurationReference;
  /**
   * A reference to a Zoom configuration resource.
   */
  "zoomConfiguration"?: ZoomConfigurationReference;

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
      type: "GoogleMeetConfigurationReference",
    },
    lastModifiedByUser: {
      baseName: "last_modified_by_user",
      type: "RelationshipToUser",
    },
    microsoftTeamsConfiguration: {
      baseName: "microsoft_teams_configuration",
      type: "MicrosoftTeamsConfigurationReference",
    },
    zoomConfiguration: {
      baseName: "zoom_configuration",
      type: "ZoomConfigurationReference",
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
