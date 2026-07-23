/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { PostmortemTemplateIncidentTypeRelationship } from "./PostmortemTemplateIncidentTypeRelationship";
import { PostmortemTemplateUserRelationship } from "./PostmortemTemplateUserRelationship";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
