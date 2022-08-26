/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Cloud Security Posture Management usage for a given organization for a given hour.
 */
export class UsageCloudSecurityPostureManagementHour {
  /**
   * The number of Cloud Security Posture Management Azure app services hosts during a given hour.
   */
  "aasHostCount"?: number;
  /**
   * The number of Cloud Security Posture Management AWS hosts during a given hour.
   */
  "awsHostCount"?: number;
  /**
   * The number of Cloud Security Posture Management Azure hosts during a given hour.
   */
  "azureHostCount"?: number;
  /**
   * The number of Cloud Security Posture Management hosts during a given hour.
   */
  "complianceHostCount"?: number;
  /**
   * The total number of Cloud Security Posture Management containers during a given hour.
   */
  "containerCount"?: number;
  /**
   * The total number of Cloud Security Posture Management hosts during a given hour.
   */
  "hostCount"?: number;
  /**
   * The hour for the usage.
   */
  "hour"?: Date;
  /**
   * The organization name.
   */
  "orgName"?: string;
  /**
   * The organization public ID.
   */
  "publicId"?: string;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    aasHostCount: {
      baseName: "aas_host_count",
      type: "number",
      format: "double",
    },
    awsHostCount: {
      baseName: "aws_host_count",
      type: "number",
      format: "double",
    },
    azureHostCount: {
      baseName: "azure_host_count",
      type: "number",
      format: "double",
    },
    complianceHostCount: {
      baseName: "compliance_host_count",
      type: "number",
      format: "double",
    },
    containerCount: {
      baseName: "container_count",
      type: "number",
      format: "double",
    },
    hostCount: {
      baseName: "host_count",
      type: "number",
      format: "double",
    },
    hour: {
      baseName: "hour",
      type: "Date",
      format: "date-time",
    },
    orgName: {
      baseName: "org_name",
      type: "string",
    },
    publicId: {
      baseName: "public_id",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return UsageCloudSecurityPostureManagementHour.attributeTypeMap;
  }

  public constructor() {}
}
