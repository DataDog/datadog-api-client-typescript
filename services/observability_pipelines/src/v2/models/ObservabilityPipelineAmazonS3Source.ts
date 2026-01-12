import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineAmazonS3SourceType } from "./ObservabilityPipelineAmazonS3SourceType";
import { ObservabilityPipelineAwsAuth } from "./ObservabilityPipelineAwsAuth";
import { ObservabilityPipelineTls } from "./ObservabilityPipelineTls";

/**
 * The `amazon_s3` source ingests logs from an Amazon S3 bucket.
 * It supports AWS authentication and TLS encryption.
 *
 * **Supported pipeline types:** logs
 */
export class ObservabilityPipelineAmazonS3Source {
  /**
   * AWS authentication credentials used for accessing AWS services such as S3.
   * If omitted, the system’s default credentials are used (for example, the IAM role and environment variables).
   */
  "auth"?: ObservabilityPipelineAwsAuth;
  /**
   * The unique identifier for this component. Used in other parts of the pipeline to reference this component (for example, as the `input` to downstream components).
   */
  "id": string;
  /**
   * AWS region where the S3 bucket resides.
   */
  "region": string;
  /**
   * Configuration for enabling TLS encryption between the pipeline component and external services.
   */
  "tls"?: ObservabilityPipelineTls;
  /**
   * The source type. Always `amazon_s3`.
   */
  "type": ObservabilityPipelineAmazonS3SourceType;
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
    id: {
      baseName: "id",
      type: "string",
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
      type: "ObservabilityPipelineAmazonS3SourceType",
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
    return ObservabilityPipelineAmazonS3Source.attributeTypeMap;
  }

  public constructor() {}
}
