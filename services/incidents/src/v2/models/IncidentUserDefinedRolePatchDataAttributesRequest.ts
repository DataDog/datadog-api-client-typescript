import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentUserDefinedRolePolicy } from "./IncidentUserDefinedRolePolicy";

/**
 * Attributes for updating an incident user-defined role.
 */
export class IncidentUserDefinedRolePatchDataAttributesRequest {
  /**
   * A description of the user-defined role.
   */
  "description"?: string;
  /**
   * The name of the user-defined role.
   */
  "name"?: string;
  /**
   * Policy configuration for a user-defined role.
   */
  "policy"?: IncidentUserDefinedRolePolicy;
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
    description: {
      baseName: "description",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    policy: {
      baseName: "policy",
      type: "IncidentUserDefinedRolePolicy",
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
    return IncidentUserDefinedRolePatchDataAttributesRequest.attributeTypeMap;
  }

  public constructor() {}
}
