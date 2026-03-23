import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DeploymentGatesEvaluationResponseData } from "./DeploymentGatesEvaluationResponseData";

/**
 * Response for a deployment gate evaluation request.
 */
export class DeploymentGatesEvaluationResponse {
  /**
   * Data for a deployment gate evaluation response.
   */
  "data"?: DeploymentGatesEvaluationResponseData;
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
      type: "DeploymentGatesEvaluationResponseData",
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
    return DeploymentGatesEvaluationResponse.attributeTypeMap;
  }

  public constructor() {}
}
