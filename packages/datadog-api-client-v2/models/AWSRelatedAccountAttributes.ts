/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes for an AWS related account.
 */
export class AWSRelatedAccountAttributes {
  /**
   * Whether or not the AWS account has a Datadog integration.
   */
  "hasDatadogIntegration"?: boolean;
  /**
   * The name of the AWS account.
   */
  "name"?: string;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    hasDatadogIntegration: {
      baseName: "has_datadog_integration",
      type: "boolean",
    },
    name: {
      baseName: "name",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AWSRelatedAccountAttributes.attributeTypeMap;
  }

  public constructor() {}
}
