/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DeploymentGatesEvaluationResponseAttributes } from "./DeploymentGatesEvaluationResponseAttributes";
import { DeploymentGatesEvaluationResponseDataType } from "./DeploymentGatesEvaluationResponseDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data for a deployment gate evaluation response.
 */
export class DeploymentGatesEvaluationResponseData {
  /**
   * Attributes for a deployment gate evaluation response.
   */
  "attributes": DeploymentGatesEvaluationResponseAttributes;
  /**
   * The unique identifier of the evaluation response.
   */
  "id": string;
  /**
   * JSON:API type for a deployment gate evaluation response.
   */
  "type": DeploymentGatesEvaluationResponseDataType;

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
      type: "DeploymentGatesEvaluationResponseAttributes",
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
      type: "DeploymentGatesEvaluationResponseDataType",
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
    return DeploymentGatesEvaluationResponseData.attributeTypeMap;
  }

  public constructor() {}
}
