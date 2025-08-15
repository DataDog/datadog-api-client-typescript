/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * How to generate compliance signals. Useful for cloud_configuration rules only.
 */
export class CloudConfigurationRuleComplianceSignalOptions {
  /**
   * The default activation status.
   */
  "defaultActivationStatus"?: boolean;
  /**
   * The default group by fields.
   */
  "defaultGroupByFields"?: Array<string>;
  /**
   * Whether signals will be sent.
   */
  "userActivationStatus"?: boolean;
  /**
   * Fields to use to group findings by when sending signals.
   */
  "userGroupByFields"?: Array<string>;

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
    defaultActivationStatus: {
      baseName: "defaultActivationStatus",
      type: "boolean",
    },
    defaultGroupByFields: {
      baseName: "defaultGroupByFields",
      type: "Array<string>",
    },
    userActivationStatus: {
      baseName: "userActivationStatus",
      type: "boolean",
    },
    userGroupByFields: {
      baseName: "userGroupByFields",
      type: "Array<string>",
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
    return CloudConfigurationRuleComplianceSignalOptions.attributeTypeMap;
  }

  public constructor() {}
}
