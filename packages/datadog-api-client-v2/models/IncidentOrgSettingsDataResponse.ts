/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentOrgSettingsDataAttributesResponse } from "./IncidentOrgSettingsDataAttributesResponse";
import { IncidentOrgSettingsRelationships } from "./IncidentOrgSettingsRelationships";
import { IncidentOrgSettingsType } from "./IncidentOrgSettingsType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Incident org settings data in a response.
 */
export class IncidentOrgSettingsDataResponse {
  /**
   * Attributes of an incident org settings resource in a response.
   */
  "attributes": IncidentOrgSettingsDataAttributesResponse;
  /**
   * The org settings identifier.
   */
  "id": string;
  /**
   * Relationships for an incident org settings resource.
   */
  "relationships"?: IncidentOrgSettingsRelationships;
  /**
   * Incident org settings resource type.
   */
  "type": IncidentOrgSettingsType;

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
    attributes: {
      baseName: "attributes",
      type: "IncidentOrgSettingsDataAttributesResponse",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    relationships: {
      baseName: "relationships",
      type: "IncidentOrgSettingsRelationships",
    },
    type: {
      baseName: "type",
      type: "IncidentOrgSettingsType",
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
    return IncidentOrgSettingsDataResponse.attributeTypeMap;
  }

  public constructor() {}
}
