/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DeploymentRuleDataType } from "./DeploymentRuleDataType";
import { UpdateDeploymentRuleParamsDataAttributes } from "./UpdateDeploymentRuleParamsDataAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Parameters for updating a deployment rule.
 */
export class UpdateDeploymentRuleParamsData {
  /**
   * Parameters for updating a deployment rule.
   */
  "attributes": UpdateDeploymentRuleParamsDataAttributes;
  /**
   * Deployment rule resource type.
   */
  "type": DeploymentRuleDataType;

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
      type: "UpdateDeploymentRuleParamsDataAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "DeploymentRuleDataType",
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
    return UpdateDeploymentRuleParamsData.attributeTypeMap;
  }

  public constructor() {}
}
