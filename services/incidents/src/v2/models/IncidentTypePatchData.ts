import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentTypeType } from "./IncidentTypeType";
import { IncidentTypeUpdateAttributes } from "./IncidentTypeUpdateAttributes";

/**
 * Incident type data for a patch request.
 */
export class IncidentTypePatchData {
  /**
   * Incident type's attributes for updates.
   */
  "attributes": IncidentTypeUpdateAttributes;
  /**
   * The incident type's ID.
   */
  "id": string;
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
      type: "IncidentTypeUpdateAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
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
    return IncidentTypePatchData.attributeTypeMap;
  }

  public constructor() {}
}
