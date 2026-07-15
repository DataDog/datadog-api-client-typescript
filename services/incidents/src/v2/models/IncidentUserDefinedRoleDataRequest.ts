import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentUserDefinedRoleDataAttributesRequest } from "./IncidentUserDefinedRoleDataAttributesRequest";
import { IncidentUserDefinedRoleRelationshipsRequest } from "./IncidentUserDefinedRoleRelationshipsRequest";
import { IncidentUserDefinedRoleType } from "./IncidentUserDefinedRoleType";

/**
 * Data for creating an incident user-defined role.
 */
export class IncidentUserDefinedRoleDataRequest {
  /**
   * Attributes for creating an incident user-defined role.
   */
  "attributes": IncidentUserDefinedRoleDataAttributesRequest;
  /**
   * Relationships for creating a user-defined role.
   */
  "relationships": IncidentUserDefinedRoleRelationshipsRequest;
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
      type: "IncidentUserDefinedRoleDataAttributesRequest",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "IncidentUserDefinedRoleRelationshipsRequest",
      required: true,
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
    return IncidentUserDefinedRoleDataRequest.attributeTypeMap;
  }

  public constructor() {}
}
