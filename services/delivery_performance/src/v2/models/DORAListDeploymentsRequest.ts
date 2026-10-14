import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DORAListDeploymentsRequestData } from "./DORAListDeploymentsRequestData";

/**
 * Request to get a list of deployments.
 */
export class DORAListDeploymentsRequest {
  /**
   * The JSON:API data.
   */
  "data": DORAListDeploymentsRequestData;
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
      type: "DORAListDeploymentsRequestData",
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
    return DORAListDeploymentsRequest.attributeTypeMap;
  }

  public constructor() {}
}
