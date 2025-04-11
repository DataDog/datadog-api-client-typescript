import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentServiceRelationships } from "./IncidentServiceRelationships";
import { IncidentServiceResponseAttributes } from "./IncidentServiceResponseAttributes";
import { IncidentServiceType } from "./IncidentServiceType";

/**
 * Incident Service data from responses.
 */
export class IncidentServiceResponseData {
  /**
   * The incident service's attributes from a response.
   */
  "attributes"?: IncidentServiceResponseAttributes;
  /**
   * The incident service's ID.
   */
  "id": string;
  /**
   * The incident service's relationships.
   */
  "relationships"?: IncidentServiceRelationships;
  /**
   * Incident service resource type.
   */
  "type": IncidentServiceType;
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
      type: "IncidentServiceResponseAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "IncidentServiceRelationships",
    },
    type: {
      baseName: "type",
      type: "IncidentServiceType",
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
    return IncidentServiceResponseData.attributeTypeMap;
  }

  public constructor() {}
}
