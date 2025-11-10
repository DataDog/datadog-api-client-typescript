import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentPageTargetType } from "./IncidentPageTargetType";

/**
 * Target for creating a page from an incident.
 */
export class IncidentPageTarget {
  /**
   * The identifier of the target (team handle, team UUID, or user UUID).
   */
  "identifier": string;
  /**
   * Type of page target for incident pages.
   */
  "type": IncidentPageTargetType;
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
    identifier: {
      baseName: "identifier",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "IncidentPageTargetType",
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
    return IncidentPageTarget.attributeTypeMap;
  }

  public constructor() {}
}
