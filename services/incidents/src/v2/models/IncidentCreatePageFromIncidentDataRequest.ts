import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentCreatePageFromIncidentDataAttributesRequest } from "./IncidentCreatePageFromIncidentDataAttributesRequest";
import { IncidentCreatePageFromIncidentType } from "./IncidentCreatePageFromIncidentType";

/**
 * Page data in a create request.
 */
export class IncidentCreatePageFromIncidentDataRequest {
  /**
   * Attributes for creating a page from an incident.
   */
  "attributes": IncidentCreatePageFromIncidentDataAttributesRequest;
  /**
   * Resource type for a page creation request.
   */
  "type": IncidentCreatePageFromIncidentType;
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
      type: "IncidentCreatePageFromIncidentDataAttributesRequest",
      required: true,
    },
    type: {
      baseName: "type",
      type: "IncidentCreatePageFromIncidentType",
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
    return IncidentCreatePageFromIncidentDataRequest.attributeTypeMap;
  }

  public constructor() {}
}
