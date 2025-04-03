import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OpsgenieServiceResponseData } from "./OpsgenieServiceResponseData";

/**
 * Response of an Opsgenie service.
 */
export class OpsgenieServiceResponse {
  /**
   * Opsgenie service data from a response.
   */
  "data": OpsgenieServiceResponseData;
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
      type: "OpsgenieServiceResponseData",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return OpsgenieServiceResponse.attributeTypeMap;
  }

  public constructor() {}
}
