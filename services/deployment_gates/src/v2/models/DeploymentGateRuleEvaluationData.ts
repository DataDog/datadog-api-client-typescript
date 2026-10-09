import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DeploymentGateRuleEvaluationAttributes } from "./DeploymentGateRuleEvaluationAttributes";
import { DeploymentGateRuleEvaluationDataType } from "./DeploymentGateRuleEvaluationDataType";

/**
 * JSON:API deployment gate rule evaluation resource.
 */
export class DeploymentGateRuleEvaluationData {
  /**
   * Attributes of a deployment gate rule evaluation.
   */
  "attributes": DeploymentGateRuleEvaluationAttributes;
  /**
   * Rule evaluation UUID.
   */
  "id": string;
  /**
   * JSON:API type for a deployment gate rule evaluation.
   */
  "type": DeploymentGateRuleEvaluationDataType;
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
      type: "DeploymentGateRuleEvaluationAttributes",
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
      type: "DeploymentGateRuleEvaluationDataType",
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
    return DeploymentGateRuleEvaluationData.attributeTypeMap;
  }

  public constructor() {}
}
