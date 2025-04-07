import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentPostmortemType } from "./IncidentPostmortemType";

/**
 * The postmortem relationship data.
 */
export class RelationshipToIncidentPostmortemData {
  /**
   * A unique identifier that represents the postmortem.
   */
  "id": string;
  /**
   * Incident postmortem resource type.
   */
  "type": IncidentPostmortemType;
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
    },
    type: {
      baseName: "type",
      type: "IncidentPostmortemType",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RelationshipToIncidentPostmortemData.attributeTypeMap;
  }

  public constructor() {}
}
