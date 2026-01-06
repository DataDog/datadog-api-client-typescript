import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DORADeploymentObject } from "./DORADeploymentObject";

/**
 * Response for the list deployments endpoint.
 */
export class DORADeploymentsListResponse {
  /**
   * The list of DORA deployment events.
   */
  "data"?: Array<DORADeploymentObject>;
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
      type: "Array<DORADeploymentObject>",
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
    return DORADeploymentsListResponse.attributeTypeMap;
  }

  public constructor() {}
}
