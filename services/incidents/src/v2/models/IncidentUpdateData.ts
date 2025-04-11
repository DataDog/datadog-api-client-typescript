import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentType } from "./IncidentType";
import { IncidentUpdateAttributes } from "./IncidentUpdateAttributes";
import { IncidentUpdateRelationships } from "./IncidentUpdateRelationships";

/**
 * Incident data for an update request.
 */
export class IncidentUpdateData {
  /**
   * The incident's attributes for an update request.
   */
  "attributes"?: IncidentUpdateAttributes;
  /**
   * The incident's ID.
   */
  "id": string;
  /**
   * The incident's relationships for an update request.
   */
  "relationships"?: IncidentUpdateRelationships;
  /**
   * Incident resource type.
   */
  "type": IncidentType;
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
      type: "IncidentUpdateAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "IncidentUpdateRelationships",
    },
    type: {
      baseName: "type",
      type: "IncidentType",
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
    return IncidentUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
