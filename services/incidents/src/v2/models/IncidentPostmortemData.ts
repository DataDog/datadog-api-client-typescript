import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentPostmortemAttributes } from "./IncidentPostmortemAttributes";
import { IncidentPostmortemRelationships } from "./IncidentPostmortemRelationships";
import { IncidentPostmortemType } from "./IncidentPostmortemType";

/**
 * The postmortem resource.
 */
export class IncidentPostmortemData {
  /**
   * The postmortem's attributes.
   */
  "attributes": IncidentPostmortemAttributes;
  /**
   * The UUID of the postmortem.
   */
  "id": string;
  /**
   * The postmortem's relationships.
   */
  "relationships": IncidentPostmortemRelationships;
  /**
   * Incident postmortem resource type.
   */
  "type": IncidentPostmortemType;
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
      type: "IncidentPostmortemAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "IncidentPostmortemRelationships",
      required: true,
    },
    type: {
      baseName: "type",
      type: "IncidentPostmortemType",
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
    return IncidentPostmortemData.attributeTypeMap;
  }

  public constructor() {}
}
