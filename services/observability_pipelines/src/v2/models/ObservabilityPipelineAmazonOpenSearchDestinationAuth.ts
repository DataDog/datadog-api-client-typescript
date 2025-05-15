import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineAmazonOpenSearchDestinationAuthStrategy } from "./ObservabilityPipelineAmazonOpenSearchDestinationAuthStrategy";

/**
 * Authentication settings for the Amazon OpenSearch destination.
 * The `strategy` field determines whether basic or AWS-based authentication is used.
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
   * Session name for the assumed role (used with `aws` strategy).
   */
  "sessionName"?: string;
  /**
   * The authentication strategy to use.
   */
  "strategy": ObservabilityPipelineAmazonOpenSearchDestinationAuthStrategy;
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
    sessionName: {
      baseName: "session_name",
      type: "string",
    },
    strategy: {
      baseName: "strategy",
      type: "ObservabilityPipelineAmazonOpenSearchDestinationAuthStrategy",
      required: true,
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
