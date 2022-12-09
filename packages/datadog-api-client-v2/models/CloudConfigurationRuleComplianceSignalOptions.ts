/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * How to generate signals
 */
export class CloudConfigurationRuleComplianceSignalOptions {
  /**
   * Whether signals will be sent.
   */
  "userActivationStatus"?: boolean;
  /**
   * Fields to use to group findings by when sending signals.
   */
  "userGroupByFields"?: Array<string>;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    userActivationStatus: {
      baseName: "userActivationStatus",
      type: "boolean",
    },
    userGroupByFields: {
      baseName: "userGroupByFields",
      type: "Array<string>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CloudConfigurationRuleComplianceSignalOptions.attributeTypeMap;
  }

  public constructor() {}
}
