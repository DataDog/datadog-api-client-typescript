import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentCreateOnCallPageDataRequest } from "./IncidentCreateOnCallPageDataRequest";

/**
 * Request payload for creating an on-call page from an incident.
 */
export class IncidentCreateOnCallPageRequest {
  /**
   * On-call page data in a create request.
   */
  "data": IncidentCreateOnCallPageDataRequest;
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
    data: {
      baseName: "data",
      type: "IncidentCreateOnCallPageDataRequest",
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
    return IncidentCreateOnCallPageRequest.attributeTypeMap;
  }

  public constructor() {}
}
