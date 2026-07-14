import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentPostmortemType } from "./IncidentPostmortemType";
import { IncidentPostmortemUpdateAttributes } from "./IncidentPostmortemUpdateAttributes";

/**
 * The postmortem resource for an update request.
 */
export class IncidentPostmortemUpdateData {
  /**
   * The postmortem's attributes for an update request.
   */
  "attributes": IncidentPostmortemUpdateAttributes;
  /**
   * The UUID of the postmortem.
   */
  "id": string;
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
      type: "IncidentPostmortemUpdateAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
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
    return IncidentPostmortemUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
