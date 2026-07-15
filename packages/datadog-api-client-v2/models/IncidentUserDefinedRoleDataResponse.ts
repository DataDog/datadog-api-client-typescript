/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentUserDefinedRoleDataAttributesResponse } from "./IncidentUserDefinedRoleDataAttributesResponse";
import { IncidentUserDefinedRoleRelationshipsResponse } from "./IncidentUserDefinedRoleRelationshipsResponse";
import { IncidentUserDefinedRoleType } from "./IncidentUserDefinedRoleType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data for an incident user-defined role response.
 */
export class IncidentUserDefinedRoleDataResponse {
  /**
   * Attributes of an incident user-defined role.
   */
  "attributes": IncidentUserDefinedRoleDataAttributesResponse;
  /**
   * The ID of the user-defined role.
   */
  "id": string;
  /**
   * Relationships of a user-defined role response.
   */
  "relationships"?: IncidentUserDefinedRoleRelationshipsResponse;
  /**
   * Incident user-defined role resource type.
   */
  "type": IncidentUserDefinedRoleType;

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
      type: "IncidentUserDefinedRoleDataAttributesResponse",
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
      type: "IncidentUserDefinedRoleRelationshipsResponse",
    },
    type: {
      baseName: "type",
      type: "IncidentUserDefinedRoleType",
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
    return IncidentUserDefinedRoleDataResponse.attributeTypeMap;
  }

  public constructor() {}
}
