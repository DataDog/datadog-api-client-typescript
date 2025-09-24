import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentTypeAttributes } from "./IncidentTypeAttributes";
import { IncidentTypeRelationships } from "./IncidentTypeRelationships";
import { IncidentTypeType } from "./IncidentTypeType";

/**
 * Incident type response data.
 */
export class IncidentTypeObject {
  /**
   * Incident type's attributes.
   */
  "attributes"?: IncidentTypeAttributes;
  /**
   * The incident type's ID.
   */
  "id": string;
  /**
   * The incident type's resource relationships.
   */
  "relationships"?: IncidentTypeRelationships;
  /**
   * Incident type resource type.
   */
  "type": IncidentTypeType;
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
      type: "IncidentTypeAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "IncidentTypeRelationships",
    },
    type: {
      baseName: "type",
      type: "IncidentTypeType",
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
    return IncidentTypeObject.attributeTypeMap;
  }

  public constructor() {}
}
