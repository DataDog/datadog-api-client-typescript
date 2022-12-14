/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CloudConfigurationRuleCaseCreate } from "./CloudConfigurationRuleCaseCreate";
import { CloudConfigurationRuleComplianceSignalOptions } from "./CloudConfigurationRuleComplianceSignalOptions";
import { CloudConfigurationRuleOptions } from "./CloudConfigurationRuleOptions";
import { CloudConfigurationRuleType } from "./CloudConfigurationRuleType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Create a new cloud configuration rule.
 */
export class CloudConfigurationRuleCreatePayload {
  /**
   * Description of generated findings and signals (severity and channels to be notified in case of a signal). Must contain exactly one item.
   */
  "cases": Array<CloudConfigurationRuleCaseCreate>;
  /**
   * How to generate compliance signals. Useful for cloud_configuration rules only.
   */
  "complianceSignalOptions": CloudConfigurationRuleComplianceSignalOptions;
  /**
   * Whether the rule is enabled.
   */
  "isEnabled": boolean;
  /**
   * Message in markdown format for generated findings and signals.
   */
  "message": string;
  /**
   * The name of the rule.
   */
  "name": string;
  /**
   * Options on cloud configuration rules.
   */
  "options": CloudConfigurationRuleOptions;
  /**
   * Tags for generated findings and signals.
   */
  "tags"?: Array<string>;
  /**
   * The rule type.
   */
  "type"?: CloudConfigurationRuleType;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    cases: {
      baseName: "cases",
      type: "Array<CloudConfigurationRuleCaseCreate>",
      required: true,
    },
    complianceSignalOptions: {
      baseName: "complianceSignalOptions",
      type: "CloudConfigurationRuleComplianceSignalOptions",
      required: true,
    },
    isEnabled: {
      baseName: "isEnabled",
      type: "boolean",
      required: true,
    },
    message: {
      baseName: "message",
      type: "string",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    options: {
      baseName: "options",
      type: "CloudConfigurationRuleOptions",
      required: true,
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
    },
    type: {
      baseName: "type",
      type: "CloudConfigurationRuleType",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CloudConfigurationRuleCreatePayload.attributeTypeMap;
  }

  public constructor() {}
}
