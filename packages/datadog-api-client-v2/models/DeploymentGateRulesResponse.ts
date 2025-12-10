/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ListDeploymentRuleResponseData } from "./ListDeploymentRuleResponseData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response for a deployment gate rules.
 */
export class DeploymentGateRulesResponse {
  /**
   * Data for a list of deployment rules.
   */
  "data"?: ListDeploymentRuleResponseData;

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
      type: "ListDeploymentRuleResponseData",
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
    return DeploymentGateRulesResponse.attributeTypeMap;
  }

  public constructor() {}
}
