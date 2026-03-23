import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DeploymentGatesEvaluationRequestData } from "./DeploymentGatesEvaluationRequestData";

/**
 * Request body for triggering a deployment gate evaluation.
 */
export class DeploymentGatesEvaluationRequest {
  /**
   * Data for a deployment gate evaluation request.
   */
  "data": DeploymentGatesEvaluationRequestData;
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
      type: "DeploymentGatesEvaluationRequestData",
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
    return DeploymentGatesEvaluationRequest.attributeTypeMap;
  }

  public constructor() {}
}
