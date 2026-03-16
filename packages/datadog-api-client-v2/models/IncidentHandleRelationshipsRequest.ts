/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentHandleRelationship } from "./IncidentHandleRelationship";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Relationships to associate with an incident handle in a create or update request.
 */
export class IncidentHandleRelationshipsRequest {
  /**
   * A single relationship object for an incident handle, wrapping the related resource data.
   */
  "commanderUser"?: IncidentHandleRelationship;
  /**
   * A single relationship object for an incident handle, wrapping the related resource data.
   */
  "incidentType": IncidentHandleRelationship;

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
    incidentType: {
      baseName: "incident_type",
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
    return IncidentHandleRelationshipsRequest.attributeTypeMap;
  }

  public constructor() {}
}
