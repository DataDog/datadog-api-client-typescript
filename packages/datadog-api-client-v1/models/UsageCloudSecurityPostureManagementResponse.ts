/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UsageCloudSecurityPostureManagementHour } from "./UsageCloudSecurityPostureManagementHour";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The response containing the Cloud Security Management Pro usage for each hour for a given organization.
 */
export class UsageCloudSecurityPostureManagementResponse {
  /**
   * Get hourly usage for Cloud Security Management Pro.
   */
  "usage"?: Array<UsageCloudSecurityPostureManagementHour>;

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
    usage: {
      baseName: "usage",
      type: "Array<UsageCloudSecurityPostureManagementHour>",
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
    return UsageCloudSecurityPostureManagementResponse.attributeTypeMap;
  }

  public constructor() {}
}
