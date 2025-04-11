import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EntityResponseIncludedIncidentType } from "./EntityResponseIncludedIncidentType";
import { EntityResponseIncludedRelatedIncidentAttributes } from "./EntityResponseIncludedRelatedIncidentAttributes";

/**
 * Included incident.
 */
export class EntityResponseIncludedIncident {
  /**
   * Incident attributes.
   */
  "attributes"?: EntityResponseIncludedRelatedIncidentAttributes;
  /**
   * Incident ID.
   */
  "id"?: string;
  /**
   * Incident description.
   */
  "type"?: EntityResponseIncludedIncidentType;
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
      type: "EntityResponseIncludedRelatedIncidentAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "EntityResponseIncludedIncidentType",
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
    return EntityResponseIncludedIncident.attributeTypeMap;
  }

  public constructor() {}
}
