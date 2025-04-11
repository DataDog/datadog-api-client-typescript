import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentTypeAttributes } from "./IncidentTypeAttributes";
import { IncidentTypeType } from "./IncidentTypeType";

/**
 * Incident type data for a create request.
 */
export class IncidentTypeCreateData {
  /**
   * Incident type's attributes.
   */
  "attributes": IncidentTypeAttributes;
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
      required: true,
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
    return IncidentTypeCreateData.attributeTypeMap;
  }

  public constructor() {}
}
