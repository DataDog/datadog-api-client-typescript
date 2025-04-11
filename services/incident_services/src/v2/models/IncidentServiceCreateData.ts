import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentServiceCreateAttributes } from "./IncidentServiceCreateAttributes";
import { IncidentServiceRelationships } from "./IncidentServiceRelationships";
import { IncidentServiceType } from "./IncidentServiceType";

/**
 * Incident Service payload for create requests.
 */
export class IncidentServiceCreateData {
  /**
   * The incident service's attributes for a create request.
   */
  "attributes"?: IncidentServiceCreateAttributes;
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
      type: "IncidentServiceCreateAttributes",
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
    return IncidentServiceCreateData.attributeTypeMap;
  }

  public constructor() {}
}
