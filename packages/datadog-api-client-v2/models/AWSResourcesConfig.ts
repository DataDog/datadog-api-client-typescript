/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * AWS Resources config
 */
export class AWSResourcesConfig {
  /**
   * Whether Datadog collects cloud security posture management resources from your AWS account.
   */
  "cloudSecurityPostureManagementCollection"?: boolean;
  /**
   * Whether Datadog collects additional attributes and configuration information about the resources in your AWS account. Required for `cspm_resource_collection`.
   */
  "extendedCollection"?: boolean;

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
    cloudSecurityPostureManagementCollection: {
      baseName: "cloud_security_posture_management_collection",
      type: "boolean",
    },
    extendedCollection: {
      baseName: "extended_collection",
      type: "boolean",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AWSResourcesConfig.attributeTypeMap;
  }

  public constructor() {}
}
