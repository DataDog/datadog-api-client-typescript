/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineAmazonSecurityLakeDestinationType } from "./ObservabilityPipelineAmazonSecurityLakeDestinationType";
import { ObservabilityPipelineAwsAuth } from "./ObservabilityPipelineAwsAuth";
import { ObservabilityPipelineTls } from "./ObservabilityPipelineTls";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The `amazon_security_lake` destination sends your logs to Amazon Security Lake.
 * Requires a bucket name, AWS region, and a custom source name.
 */
export class ObservabilityPipelineAmazonSecurityLakeDestination {
  /**
   * AWS authentication credentials used for accessing AWS services such as S3.
   * If omitted, the system’s default credentials are used (for example, the IAM role and environment variables).
   */
  "auth"?: ObservabilityPipelineAwsAuth;
  /**
   * Name of the Amazon S3 bucket in Security Lake (3-63 characters).
   */
  "bucket": string;
  /**
   * Custom source name for the logs in Security Lake.
   */
  "customSourceName": string;
  /**
   * Unique identifier for the destination component.
   */
  "id": string;
  /**
   * A list of component IDs whose output is used as the `input` for this component.
   */
  "inputs": Array<string>;
  /**
   * AWS region of the S3 bucket.
   */
  "region": string;
  /**
   * Configuration for enabling TLS encryption between the pipeline component and external services.
   */
  "tls"?: ObservabilityPipelineTls;
  /**
   * The destination type. Always `amazon_security_lake`.
   */
  "type": ObservabilityPipelineAmazonSecurityLakeDestinationType;

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
    auth: {
      baseName: "auth",
      type: "ObservabilityPipelineAwsAuth",
    },
    bucket: {
      baseName: "bucket",
      type: "string",
      required: true,
    },
    customSourceName: {
      baseName: "custom_source_name",
      type: "string",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    inputs: {
      baseName: "inputs",
      type: "Array<string>",
      required: true,
    },
    region: {
      baseName: "region",
      type: "string",
      required: true,
    },
    tls: {
      baseName: "tls",
      type: "ObservabilityPipelineTls",
    },
    type: {
      baseName: "type",
      type: "ObservabilityPipelineAmazonSecurityLakeDestinationType",
      required: true,
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
    return ObservabilityPipelineAmazonSecurityLakeDestination.attributeTypeMap;
  }

  public constructor() {}
}
