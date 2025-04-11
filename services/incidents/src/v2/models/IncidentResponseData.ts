import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentResponseAttributes } from "./IncidentResponseAttributes";
import { IncidentResponseRelationships } from "./IncidentResponseRelationships";
import { IncidentType } from "./IncidentType";

/**
 * Incident data from a response.
 */
export class IncidentResponseData {
  /**
   * The incident's attributes from a response.
   */
  "attributes"?: IncidentResponseAttributes;
  /**
   * The incident's ID.
   */
  "id": string;
  /**
   * The incident's relationships from a response.
   */
  "relationships"?: IncidentResponseRelationships;
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
      type: "IncidentResponseAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "IncidentResponseRelationships",
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
    return IncidentResponseData.attributeTypeMap;
  }

  public constructor() {}
}
