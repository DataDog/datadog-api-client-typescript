/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Cloud Security Management Pro usage for a given organization for a given hour.
 */
export class UsageCloudSecurityPostureManagementHour {
  /**
   * The number of Cloud Security Management Pro Azure app services hosts during a given hour.
   */
  "aasHostCount"?: number;
  /**
   * The number of Cloud Security Management Pro AWS hosts during a given hour.
   */
  "awsHostCount"?: number;
  /**
   * The number of Cloud Security Management Pro Azure hosts during a given hour.
   */
  "azureHostCount"?: number;
  /**
   * The number of Cloud Security Management Pro hosts during a given hour.
   */
  "complianceHostCount"?: number;
  /**
   * The total number of Cloud Security Management Pro containers during a given hour.
   */
  "containerCount"?: number;
  /**
   * The number of Cloud Security Management Pro GCP hosts during a given hour.
   */
  "gcpHostCount"?: number;
  /**
   * The total number of Cloud Security Management Pro hosts during a given hour.
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
    gcpHostCount: {
      baseName: "gcp_host_count",
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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
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
