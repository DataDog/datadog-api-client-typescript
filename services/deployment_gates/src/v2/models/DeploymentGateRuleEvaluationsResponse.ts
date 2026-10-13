import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DeploymentGateEvaluationListMeta } from "./DeploymentGateEvaluationListMeta";
import { DeploymentGateRuleEvaluationData } from "./DeploymentGateRuleEvaluationData";

/**
 * Paginated deployment gate rule evaluations.
 */
export class DeploymentGateRuleEvaluationsResponse {
  "data": Array<DeploymentGateRuleEvaluationData>;
  /**
   * Pagination metadata.
   */
  "meta": DeploymentGateEvaluationListMeta;
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
      type: "Array<DeploymentGateRuleEvaluationData>",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "DeploymentGateEvaluationListMeta",
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
    return DeploymentGateRuleEvaluationsResponse.attributeTypeMap;
  }

  public constructor() {}
}
