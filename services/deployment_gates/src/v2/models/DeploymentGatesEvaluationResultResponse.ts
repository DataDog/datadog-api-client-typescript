import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DeploymentGatesEvaluationResultResponseData } from "./DeploymentGatesEvaluationResultResponseData";

/**
 * Response containing the result of a deployment gate evaluation.
 */
export class DeploymentGatesEvaluationResultResponse {
  /**
   * Data for a deployment gate evaluation result response.
   */
  "data"?: DeploymentGatesEvaluationResultResponseData;
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
      type: "DeploymentGatesEvaluationResultResponseData",
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
    return DeploymentGatesEvaluationResultResponse.attributeTypeMap;
  }

  public constructor() {}
}
