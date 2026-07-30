import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentImpactFieldDataAttributesResponse } from "./IncidentImpactFieldDataAttributesResponse";
import { IncidentImpactFieldRelationships } from "./IncidentImpactFieldRelationships";
import { IncidentImpactFieldType } from "./IncidentImpactFieldType";

/**
 * Impact field data in a response.
 */
export class IncidentImpactFieldDataResponse {
  /**
   * Attributes of an impact field in a response.
   */
  "attributes": IncidentImpactFieldDataAttributesResponse;
  /**
   * The impact field identifier.
   */
  "id": string;
  /**
   * Relationships for an impact field.
   */
  "relationships"?: IncidentImpactFieldRelationships;
  /**
   * Impact field resource type.
   */
  "type": IncidentImpactFieldType;
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
      type: "IncidentImpactFieldDataAttributesResponse",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    relationships: {
      baseName: "relationships",
      type: "IncidentImpactFieldRelationships",
    },
    type: {
      baseName: "type",
      type: "IncidentImpactFieldType",
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
    return IncidentImpactFieldDataResponse.attributeTypeMap;
  }

  public constructor() {}
}
