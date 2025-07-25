/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes for the AWS on demand task.
 */
export class AwsOnDemandAttributes {
  /**
   * The arn of the resource to scan.
   */
  "arn"?: string;
  /**
   * Specifies the assignment timestamp if the task has been already assigned to a scanner.
   */
  "assignedAt"?: string;
  /**
   * The task submission timestamp.
   */
  "createdAt"?: string;
  /**
   * Indicates the status of the task.
   * QUEUED: the task has been submitted successfully and the resource has not been assigned to a scanner yet.
   * ASSIGNED: the task has been assigned.
   * ABORTED: the scan has been aborted after a period of time due to technical reasons, such as resource not found, insufficient permissions, or the absence of a configured scanner.
   */
  "status"?: string;

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
    arn: {
      baseName: "arn",
      type: "string",
    },
    assignedAt: {
      baseName: "assigned_at",
      type: "string",
    },
    createdAt: {
      baseName: "created_at",
      type: "string",
    },
    status: {
      baseName: "status",
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
    return AwsOnDemandAttributes.attributeTypeMap;
  }

  public constructor() {}
}
