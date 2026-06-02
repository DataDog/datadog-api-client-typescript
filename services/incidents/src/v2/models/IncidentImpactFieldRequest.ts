import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentImpactFieldDataRequest } from "./IncidentImpactFieldDataRequest";

/**
 * Request payload for creating an impact field.
 */
export class IncidentImpactFieldRequest {
  /**
   * Impact field data in a create request.
   */
  "data": IncidentImpactFieldDataRequest;
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
      type: "IncidentImpactFieldDataRequest",
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
    return IncidentImpactFieldRequest.attributeTypeMap;
  }

  public constructor() {}
}
