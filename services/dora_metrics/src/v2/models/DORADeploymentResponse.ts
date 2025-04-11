import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DORADeploymentResponseData } from "./DORADeploymentResponseData";

/**
 * Response after receiving a DORA deployment event.
 */
export class DORADeploymentResponse {
  /**
   * The JSON:API data.
   */
  "data": DORADeploymentResponseData;
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
      type: "DORADeploymentResponseData",
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
    return DORADeploymentResponse.attributeTypeMap;
  }

  public constructor() {}
}
