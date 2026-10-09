import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DeploymentGateEvaluationAttributes } from "./DeploymentGateEvaluationAttributes";
import { DeploymentGateEvaluationDataType } from "./DeploymentGateEvaluationDataType";

/**
 * JSON:API deployment gate evaluation resource.
 */
export class DeploymentGateEvaluationData {
  /**
   * Attributes of a deployment gate evaluation.
   */
  "attributes": DeploymentGateEvaluationAttributes;
  /**
   * Deployment gate evaluation UUID.
   */
  "id": string;
  /**
   * JSON:API type for a deployment gate evaluation.
   */
  "type": DeploymentGateEvaluationDataType;
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
    attributes: {
      baseName: "attributes",
      type: "DeploymentGateEvaluationAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "DeploymentGateEvaluationDataType",
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
    return DeploymentGateEvaluationData.attributeTypeMap;
  }

  public constructor() {}
}
