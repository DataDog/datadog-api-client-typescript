import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OpsgenieAccountUpdateData } from "./OpsgenieAccountUpdateData";

/**
 * Update request for an Opsgenie account.
 */
export class OpsgenieAccountUpdateRequest {
  /**
   * Opsgenie account data for an update request.
   */
  "data": OpsgenieAccountUpdateData;
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
      type: "OpsgenieAccountUpdateData",
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
    return OpsgenieAccountUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
