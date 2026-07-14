import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentUserDefinedRolePatchDataAttributesRequest } from "./IncidentUserDefinedRolePatchDataAttributesRequest";
import { IncidentUserDefinedRoleType } from "./IncidentUserDefinedRoleType";

/**
 * Data for updating an incident user-defined role.
 */
export class IncidentUserDefinedRolePatchDataRequest {
  /**
   * Attributes for updating an incident user-defined role.
   */
  "attributes"?: IncidentUserDefinedRolePatchDataAttributesRequest;
  /**
   * The ID of the user-defined role to update.
   */
  "id": string;
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
      type: "IncidentUserDefinedRolePatchDataAttributesRequest",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
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
    return IncidentUserDefinedRolePatchDataRequest.attributeTypeMap;
  }

  public constructor() {}
}
