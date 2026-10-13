import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DeploymentGateEvaluationData } from "./DeploymentGateEvaluationData";
import { DeploymentGateEvaluationListMeta } from "./DeploymentGateEvaluationListMeta";

/**
 * Paginated deployment gate evaluations.
 */
export class DeploymentGateEvaluationsResponse {
  "data": Array<DeploymentGateEvaluationData>;
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
      type: "Array<DeploymentGateEvaluationData>",
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
    return DeploymentGateEvaluationsResponse.attributeTypeMap;
  }

  public constructor() {}
}
