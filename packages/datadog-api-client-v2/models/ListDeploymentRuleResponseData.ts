/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ListDeploymentRulesDataType } from "./ListDeploymentRulesDataType";
import { ListDeploymentRulesResponseDataAttributes } from "./ListDeploymentRulesResponseDataAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data for a list of deployment rules.
 */
export class ListDeploymentRuleResponseData {
  "attributes": ListDeploymentRulesResponseDataAttributes;
  /**
   * Unique identifier of the deployment rule.
   */
  "id": string;
  /**
   * List deployment rule resource type.
   */
  "type": ListDeploymentRulesDataType;

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
      type: "ListDeploymentRulesResponseDataAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ListDeploymentRulesDataType",
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
    return ListDeploymentRuleResponseData.attributeTypeMap;
  }

  public constructor() {}
}
