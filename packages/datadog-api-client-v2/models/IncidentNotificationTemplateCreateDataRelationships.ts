/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RelationshipToIncidentType } from "./RelationshipToIncidentType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of `NotificationTemplateCreateDataRelationships` object.
 */
export class IncidentNotificationTemplateCreateDataRelationships {
  /**
   * Relationship to an incident type.
   */
  "incidentType"?: RelationshipToIncidentType;

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
      type: "RelationshipToIncidentType",
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
    return IncidentNotificationTemplateCreateDataRelationships.attributeTypeMap;
  }

  public constructor() {}
}
