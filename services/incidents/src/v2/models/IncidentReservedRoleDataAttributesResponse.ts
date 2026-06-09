import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentReservedRolePolicy } from "./IncidentReservedRolePolicy";

/**
 * Attributes of a reserved role.
 */
export class IncidentReservedRoleDataAttributesResponse {
  /**
   * Timestamp when the role was created.
   */
  "created": Date;
  /**
   * A description of the reserved role.
   */
  "description"?: string;
  /**
   * Timestamp when the role was last modified.
   */
  "modified": Date;
  /**
   * The name of the reserved role.
   */
  "name": string;
  /**
   * Policy for a reserved role.
   */
  "policy": IncidentReservedRolePolicy;
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
      type: "IncidentReservedRolePolicy",
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
    return IncidentReservedRoleDataAttributesResponse.attributeTypeMap;
  }

  public constructor() {}
}
