import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineAmazonSecurityLakeDestinationType } from "./ObservabilityPipelineAmazonSecurityLakeDestinationType";
import { ObservabilityPipelineAwsAuth } from "./ObservabilityPipelineAwsAuth";
import { ObservabilityPipelineBufferOptions } from "./ObservabilityPipelineBufferOptions";
import { ObservabilityPipelineTls } from "./ObservabilityPipelineTls";

/**
 * The `amazon_security_lake` destination sends your logs to Amazon Security Lake.
 *
 * **Supported pipeline types:** logs
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
   * Configuration for buffer settings on destination components.
   */
  "buffer"?: ObservabilityPipelineBufferOptions;
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
    buffer: {
      baseName: "buffer",
      type: "ObservabilityPipelineBufferOptions",
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
      type: "{ [key: string]: any; }",
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
