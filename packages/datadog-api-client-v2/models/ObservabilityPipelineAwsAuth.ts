/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * AWS authentication credentials used for accessing AWS services such as S3.
 * If omitted, the system’s default credentials are used (for example, the IAM role and environment variables).
 */
export class ObservabilityPipelineAwsAuth {
  /**
   * The Amazon Resource Name (ARN) of the role to assume.
   */
  "assumeRole"?: string;
  /**
   * A unique identifier for cross-account role assumption.
   */
  "externalId"?: string;
  /**
   * A session identifier used for logging and tracing the assumed role session.
   */
  "sessionName"?: string;

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
    assumeRole: {
      baseName: "assume_role",
      type: "string",
    },
    externalId: {
      baseName: "external_id",
      type: "string",
    },
    sessionName: {
      baseName: "session_name",
      type: "string",
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
    return ObservabilityPipelineAwsAuth.attributeTypeMap;
  }

  public constructor() {}
}
