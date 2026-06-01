import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentImpactFieldDataAttributesRequest } from "./IncidentImpactFieldDataAttributesRequest";
import { IncidentImpactFieldRelationshipsRequest } from "./IncidentImpactFieldRelationshipsRequest";
import { IncidentImpactFieldType } from "./IncidentImpactFieldType";

/**
 * Impact field data in a create request.
 */
export class IncidentImpactFieldDataRequest {
  /**
   * Attributes for creating an impact field.
   */
  "attributes": IncidentImpactFieldDataAttributesRequest;
  /**
   * Relationships for an impact field create request.
   */
  "relationships": IncidentImpactFieldRelationshipsRequest;
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
      type: "IncidentImpactFieldDataAttributesRequest",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "IncidentImpactFieldRelationshipsRequest",
      required: true,
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
    return IncidentImpactFieldDataRequest.attributeTypeMap;
  }

  public constructor() {}
}
