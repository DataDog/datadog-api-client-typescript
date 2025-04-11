import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentTypePatchData } from "./IncidentTypePatchData";

/**
 * Patch request for an incident type.
 */
export class IncidentTypePatchRequest {
  /**
   * Incident type data for a patch request.
   */
  "data": IncidentTypePatchData;
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
      type: "IncidentTypePatchData",
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
    return IncidentTypePatchRequest.attributeTypeMap;
  }

  public constructor() {}
}
