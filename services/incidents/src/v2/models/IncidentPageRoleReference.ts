import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentPageRoleType } from "./IncidentPageRoleType";

/**
 * A reference to an incident role for a page.
 */
export class IncidentPageRoleReference {
  /**
   * The role identifier.
   */
  "id": string;
  /**
   * The type of incident role for a page.
   */
  "type": IncidentPageRoleType;
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
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "IncidentPageRoleType",
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
    return IncidentPageRoleReference.attributeTypeMap;
  }

  public constructor() {}
}
