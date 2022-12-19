/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CloudConfigurationRegoRule } from "./CloudConfigurationRegoRule";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Options for cloud_configuration rules.
 */
export class CloudConfigurationComplianceRuleOptions {
  /**
   * Whether the rule is a complex one.
   * Must be set to true if `regoRule.resourceTypes` contains more than one item. Defaults to false.
   */
  "complexRule"?: boolean;
  /**
   * Rule details.
   */
  "regoRule": CloudConfigurationRegoRule;
  /**
   * Main resource type to be checked by the rule. It should be specified again in `regoRule.resourceTypes`.
   */
  "resourceType": string;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    complexRule: {
      baseName: "complexRule",
      type: "boolean",
    },
    regoRule: {
      baseName: "regoRule",
      type: "CloudConfigurationRegoRule",
      required: true,
    },
    resourceType: {
      baseName: "resourceType",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CloudConfigurationComplianceRuleOptions.attributeTypeMap;
  }

  public constructor() {}
}
