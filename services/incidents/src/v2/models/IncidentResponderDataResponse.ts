import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentResponderDataAttributesResponse } from "./IncidentResponderDataAttributesResponse";
import { IncidentResponderRelationships } from "./IncidentResponderRelationships";
import { IncidentResponderType } from "./IncidentResponderType";

/**
 * Incident responder data in a response.
 */
export class IncidentResponderDataResponse {
  /**
   * Attributes of an incident responder in a response.
   */
  "attributes": IncidentResponderDataAttributesResponse;
  /**
   * The responder identifier.
   */
  "id": string;
  /**
   * Relationships for an incident responder.
   */
  "relationships"?: IncidentResponderRelationships;
  /**
   * Incident responder resource type.
   */
  "type": IncidentResponderType;
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
      type: "IncidentResponderDataAttributesResponse",
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
      type: "IncidentResponderRelationships",
    },
    type: {
      baseName: "type",
      type: "IncidentResponderType",
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
    return IncidentResponderDataResponse.attributeTypeMap;
  }

  public constructor() {}
}
