/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Rule details.
 */
export class CloudConfigurationRegoRule {
  /**
   * The policy written in `rego`, see: https://www.openpolicyagent.org/docs/latest/policy-language/
   */
  "policy": string;
  /**
   * List of resource types that will be evaluated upon. Must have at least one element.
   */
  "resourceTypes": Array<string>;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    policy: {
      baseName: "policy",
      type: "string",
      required: true,
    },
    resourceTypes: {
      baseName: "resourceTypes",
      type: "Array<string>",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CloudConfigurationRegoRule.attributeTypeMap;
  }

  public constructor() {}
}
