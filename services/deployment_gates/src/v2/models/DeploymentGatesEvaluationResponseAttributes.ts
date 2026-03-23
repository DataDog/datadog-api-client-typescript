import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes for a deployment gate evaluation response.
 */
export class DeploymentGatesEvaluationResponseAttributes {
  /**
   * The unique identifier of the gate evaluation.
   */
  "evaluationId": string;
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
    evaluationId: {
      baseName: "evaluation_id",
      type: "string",
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
    return DeploymentGatesEvaluationResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
