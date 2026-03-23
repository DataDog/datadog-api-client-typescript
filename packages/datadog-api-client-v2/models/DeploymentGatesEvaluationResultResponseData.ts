/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DeploymentGatesEvaluationResultResponseAttributes } from "./DeploymentGatesEvaluationResultResponseAttributes";
import { DeploymentGatesEvaluationResultResponseDataType } from "./DeploymentGatesEvaluationResultResponseDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data for a deployment gate evaluation result response.
 */
export class DeploymentGatesEvaluationResultResponseData {
  /**
   * Attributes for a deployment gate evaluation result response.
   */
  "attributes": DeploymentGatesEvaluationResultResponseAttributes;
  /**
   * The unique identifier of the evaluation.
   */
  "id": string;
  /**
   * JSON:API type for a deployment gate evaluation result response.
   */
  "type": DeploymentGatesEvaluationResultResponseDataType;

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
      type: "DeploymentGatesEvaluationResultResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "DeploymentGatesEvaluationResultResponseDataType",
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
    return DeploymentGatesEvaluationResultResponseData.attributeTypeMap;
  }

  public constructor() {}
}
