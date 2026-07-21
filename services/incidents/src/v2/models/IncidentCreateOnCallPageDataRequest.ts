import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentCreateOnCallPageDataAttributesRequest } from "./IncidentCreateOnCallPageDataAttributesRequest";
import { IncidentCreatePageFromIncidentType } from "./IncidentCreatePageFromIncidentType";

/**
 * On-call page data in a create request.
 */
export class IncidentCreateOnCallPageDataRequest {
  /**
   * Attributes for creating an on-call page from an incident.
   */
  "attributes": IncidentCreateOnCallPageDataAttributesRequest;
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
      type: "IncidentCreateOnCallPageDataAttributesRequest",
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
    return IncidentCreateOnCallPageDataRequest.attributeTypeMap;
  }

  public constructor() {}
}
