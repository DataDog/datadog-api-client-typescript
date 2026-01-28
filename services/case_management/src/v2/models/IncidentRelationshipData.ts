import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentResourceType } from "./IncidentResourceType";

/**
 * Incident relationship data
 */
export class IncidentRelationshipData {
  /**
   * Incident identifier
   */
  "id": string;
  /**
   * Incident resource type
   */
  "type": IncidentResourceType;
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
      type: "IncidentResourceType",
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
    return IncidentRelationshipData.attributeTypeMap;
  }

  public constructor() {}
}
