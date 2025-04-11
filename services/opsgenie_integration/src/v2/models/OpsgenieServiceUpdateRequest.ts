import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OpsgenieServiceUpdateData } from "./OpsgenieServiceUpdateData";

/**
 * Update request for an Opsgenie service.
 */
export class OpsgenieServiceUpdateRequest {
  /**
   * Opsgenie service for an update request.
   */
  "data": OpsgenieServiceUpdateData;
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
      type: "OpsgenieServiceUpdateData",
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
    return OpsgenieServiceUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
