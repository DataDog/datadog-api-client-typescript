/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes for AWS cloud authentication intake mapping response.
 */
export class AWSCloudAuthIntakeMappingAttributesResponse {
  /**
   * AWS caller ARN pattern allowed to authenticate for telemetry submission. ARN syntax and AWS integration membership are validated by the server. For an assumed role, use the STS assumed-role ARN with a trailing /* wildcard to match its sessions.
   */
  "arnPattern": string;
  /**
   * Whether the mapping allows Private Action Runner enrollment. This attribute may be omitted when enrollment is disabled. Enrollment permission is managed separately from the ARN pattern.
   */
  "parEnrollmentEnabled"?: boolean;

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
    arnPattern: {
      baseName: "arn_pattern",
      type: "string",
      required: true,
    },
    parEnrollmentEnabled: {
      baseName: "par_enrollment_enabled",
      type: "boolean",
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
    return AWSCloudAuthIntakeMappingAttributesResponse.attributeTypeMap;
  }

  public constructor() {}
}
