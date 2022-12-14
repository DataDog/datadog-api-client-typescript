/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CloudConfigurationComplianceRuleOptions } from "./CloudConfigurationComplianceRuleOptions";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Options on cloud configuration rules.
 */
export class CloudConfigurationRuleOptions {
  /**
   * Options for cloud_configuration rules.
   */
  "complianceRuleOptions": CloudConfigurationComplianceRuleOptions;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    complianceRuleOptions: {
      baseName: "complianceRuleOptions",
      type: "CloudConfigurationComplianceRuleOptions",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CloudConfigurationRuleOptions.attributeTypeMap;
  }

  public constructor() {}
}
