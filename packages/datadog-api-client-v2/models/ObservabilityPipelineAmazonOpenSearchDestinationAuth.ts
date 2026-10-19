/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineAmazonOpenSearchDestinationAuthStrategy } from "./ObservabilityPipelineAmazonOpenSearchDestinationAuthStrategy";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Authentication settings for the Amazon OpenSearch destination.
 * The `strategy` field determines whether basic or AWS-based authentication is used.
 * When `strategy` is `basic`, use `username_key` and `password_key` to reference credentials stored in environment variables or secrets.
 */
export class ObservabilityPipelineAmazonOpenSearchDestinationAuth {
  /**
   * The ARN of the role to assume (used with `aws` strategy).
   */
  "assumeRole"?: string;
  /**
   * AWS region
   */
  "awsRegion"?: string;
  /**
   * External ID for the assumed role (used with `aws` strategy).
   */
  "externalId"?: string;
  /**
   * Name of the environment variable or secret that holds the Amazon OpenSearch password (used when `strategy` is `basic`).
   */
  "passwordKey"?: string;
  /**
   * Session name for the assumed role (used with `aws` strategy).
   */
  "sessionName"?: string;
  /**
   * The authentication strategy to use.
   */
  "strategy": ObservabilityPipelineAmazonOpenSearchDestinationAuthStrategy;
  /**
   * Name of the environment variable or secret that holds the Amazon OpenSearch username (used when `strategy` is `basic`).
   */
  "usernameKey"?: string;

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
    awsRegion: {
      baseName: "aws_region",
      type: "string",
    },
    externalId: {
      baseName: "external_id",
      type: "string",
    },
    passwordKey: {
      baseName: "password_key",
      type: "string",
    },
    sessionName: {
      baseName: "session_name",
      type: "string",
    },
    strategy: {
      baseName: "strategy",
      type: "ObservabilityPipelineAmazonOpenSearchDestinationAuthStrategy",
      required: true,
    },
    usernameKey: {
      baseName: "username_key",
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
    return ObservabilityPipelineAmazonOpenSearchDestinationAuth.attributeTypeMap;
  }

  public constructor() {}
}
