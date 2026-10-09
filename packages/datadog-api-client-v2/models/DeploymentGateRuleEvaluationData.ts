/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DeploymentGateRuleEvaluationAttributes } from "./DeploymentGateRuleEvaluationAttributes";
import { DeploymentGateRuleEvaluationDataType } from "./DeploymentGateRuleEvaluationDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
