import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RelationshipToIncidentPostmortemData } from "./RelationshipToIncidentPostmortemData";

/**
 * A relationship reference for postmortems.
 */
export class RelationshipToIncidentPostmortem {
  /**
   * The postmortem relationship data.
   */
  "data": RelationshipToIncidentPostmortemData;
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
    data: {
      baseName: "data",
      type: "RelationshipToIncidentPostmortemData",
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
    return RelationshipToIncidentPostmortem.attributeTypeMap;
  }

  public constructor() {}
}
