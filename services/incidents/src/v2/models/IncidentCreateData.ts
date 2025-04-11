import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentCreateAttributes } from "./IncidentCreateAttributes";
import { IncidentCreateRelationships } from "./IncidentCreateRelationships";
import { IncidentType } from "./IncidentType";

/**
 * Incident data for a create request.
 */
export class IncidentCreateData {
  /**
   * The incident's attributes for a create request.
   */
  "attributes": IncidentCreateAttributes;
  /**
   * The relationships the incident will have with other resources once created.
   */
  "relationships"?: IncidentCreateRelationships;
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
      type: "IncidentCreateAttributes",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "IncidentCreateRelationships",
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
    return IncidentCreateData.attributeTypeMap;
  }

  public constructor() {}
}
