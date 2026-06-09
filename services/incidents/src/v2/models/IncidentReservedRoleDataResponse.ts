import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentReservedRoleDataAttributesResponse } from "./IncidentReservedRoleDataAttributesResponse";
import { IncidentReservedRoleType } from "./IncidentReservedRoleType";

/**
 * Reserved role data in a response.
 */
export class IncidentReservedRoleDataResponse {
  /**
   * Attributes of a reserved role.
   */
  "attributes": IncidentReservedRoleDataAttributesResponse;
  /**
   * The reserved role identifier.
   */
  "id": string;
  /**
   * Incident reserved role resource type.
   */
  "type": IncidentReservedRoleType;
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
      type: "IncidentReservedRoleDataAttributesResponse",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "IncidentReservedRoleType",
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
    return IncidentReservedRoleDataResponse.attributeTypeMap;
  }

  public constructor() {}
}
