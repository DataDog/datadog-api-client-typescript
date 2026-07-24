/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { PostmortemTemplateIncidentTypeRelationship } from "./PostmortemTemplateIncidentTypeRelationship";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Relationships for a postmortem template. `incident_type` is required when creating a template and is immutable afterwards.
 */
export class PostmortemTemplateCreateRelationships {
  /**
   * Relationship to the incident type this template belongs to.
   */
  "incidentType"?: PostmortemTemplateIncidentTypeRelationship;

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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return PostmortemTemplateCreateRelationships.attributeTypeMap;
  }

  public constructor() {}
}
