import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentHandleRelationship } from "./IncidentHandleRelationship";

export class IncidentHandleRelationships {
  "commanderUser"?: IncidentHandleRelationship;
  "createdByUser": IncidentHandleRelationship;
  "incidentType": IncidentHandleRelationship;
  "lastModifiedByUser": IncidentHandleRelationship;
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
      type: "IncidentHandleRelationship",
    },
    createdByUser: {
      baseName: "created_by_user",
      type: "IncidentHandleRelationship",
      required: true,
    },
    incidentType: {
      baseName: "incident_type",
      type: "IncidentHandleRelationship",
      required: true,
    },
    lastModifiedByUser: {
      baseName: "last_modified_by_user",
      type: "IncidentHandleRelationship",
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
    return IncidentHandleRelationships.attributeTypeMap;
  }

  public constructor() {}
}
