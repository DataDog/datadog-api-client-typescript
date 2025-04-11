import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OpsgenieServiceResponseData } from "./OpsgenieServiceResponseData";

/**
 * Response with a list of Opsgenie services.
 */
export class OpsgenieServicesResponse {
  /**
   * An array of Opsgenie services.
   */
  "data": Array<OpsgenieServiceResponseData>;
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
      type: "Array<OpsgenieServiceResponseData>",
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
    return OpsgenieServicesResponse.attributeTypeMap;
  }

  public constructor() {}
}
