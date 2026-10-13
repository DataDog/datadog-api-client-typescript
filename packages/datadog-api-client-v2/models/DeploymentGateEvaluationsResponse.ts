/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DeploymentGateEvaluationData } from "./DeploymentGateEvaluationData";
import { DeploymentGateEvaluationListMeta } from "./DeploymentGateEvaluationListMeta";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
