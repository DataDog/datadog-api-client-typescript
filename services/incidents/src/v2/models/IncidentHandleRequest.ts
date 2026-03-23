import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentHandleDataRequest } from "./IncidentHandleDataRequest";

/**
 * Request payload for creating or updating a global incident handle.
 */
export class IncidentHandleRequest {
  /**
   * Data object representing an incident handle in a create or update request.
   */
  "data": IncidentHandleDataRequest;
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
      type: "IncidentHandleDataRequest",
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
    return IncidentHandleRequest.attributeTypeMap;
  }

  public constructor() {}
}
