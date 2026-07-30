import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentImpactPatchData } from "./IncidentImpactPatchData";

/**
 * Patch request for an incident impact.
 */
export class IncidentImpactPatchRequest {
  /**
   * Incident impact data for a patch request.
   */
  "data": IncidentImpactPatchData;
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
      type: "IncidentImpactPatchData",
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
    return IncidentImpactPatchRequest.attributeTypeMap;
  }

  public constructor() {}
}
