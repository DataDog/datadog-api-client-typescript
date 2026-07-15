import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentUserDefinedRolePolicy } from "./IncidentUserDefinedRolePolicy";

/**
 * Attributes of an incident user-defined role.
 */
export class IncidentUserDefinedRoleDataAttributesResponse {
  /**
   * Timestamp when the role was created.
   */
  "created": Date;
  /**
   * A description of the user-defined role.
   */
  "description"?: string;
  /**
   * Timestamp when the role was last modified.
   */
  "modified": Date;
  /**
   * The name of the user-defined role.
   */
  "name": string;
  /**
   * Policy configuration for a user-defined role.
   */
  "policy": IncidentUserDefinedRolePolicy;
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
    created: {
      baseName: "created",
      type: "Date",
      required: true,
      format: "date-time",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    modified: {
      baseName: "modified",
      type: "Date",
      required: true,
      format: "date-time",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    policy: {
      baseName: "policy",
      type: "IncidentUserDefinedRolePolicy",
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
    return IncidentUserDefinedRoleDataAttributesResponse.attributeTypeMap;
  }

  public constructor() {}
}
