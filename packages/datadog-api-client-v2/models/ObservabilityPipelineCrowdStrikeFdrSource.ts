/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineCrowdStrikeFdrSourceType } from "./ObservabilityPipelineCrowdStrikeFdrSourceType";
import { ObservabilityPipelineTls } from "./ObservabilityPipelineTls";

import { AttributeTypeMap, Int64 } from "../../datadog-api-client-common/util";

/**
 * The `crowdstrike_fdr` source ingests CrowdStrike Falcon Data Replicator (FDR) data.
 * It reads file notifications from the CrowdStrike-managed SQS queue for your FDR feed and downloads the referenced objects from the CrowdStrike-managed S3 bucket.
 *
 * **Supported pipeline types:** logs
 */
export class ObservabilityPipelineCrowdStrikeFdrSource {
  /**
   * Name of the environment variable or secret that holds the AWS access key ID that CrowdStrike generated for the FDR feed.
   */
  "accessKeyIdKey"?: string;
  /**
   * Number of concurrent tasks polling the SQS queue. Defaults to the number of Worker threads.
   */
  "clientConcurrency"?: Int64;
  /**
   * The unique identifier for this component. Used in other parts of the pipeline to reference this component (for example, as the `input` to downstream components).
   */
  "id": string;
  /**
   * Maximum number of SQS messages to receive per poll. Each message can reference multiple files. Defaults to 1.
   */
  "maxNumberOfMessages"?: Int64;
  /**
   * AWS region of the FDR feed's SQS queue and S3 bucket.
   */
  "region": string;
  /**
   * Name of the environment variable or secret that holds the AWS secret access key that CrowdStrike generated for the FDR feed.
   */
  "secretAccessKeyKey"?: string;
  /**
   * Configuration for enabling TLS encryption between the pipeline component and external services.
   */
  "tls"?: ObservabilityPipelineTls;
  /**
   * The source type. Always `crowdstrike_fdr`.
   */
  "type": ObservabilityPipelineCrowdStrikeFdrSourceType;
  /**
   * Name of the environment variable or secret that holds the URL of the FDR feed's SQS queue.
   */
  "urlKey"?: string;
  /**
   * Number of seconds a received SQS message is hidden from other consumers. Set it higher than the time needed to download and process the largest FDR file. Defaults to 300.
   */
  "visibilityTimeoutSecs"?: Int64;

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
    accessKeyIdKey: {
      baseName: "access_key_id_key",
      type: "string",
    },
    clientConcurrency: {
      baseName: "client_concurrency",
      type: "number",
      format: "int64",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    maxNumberOfMessages: {
      baseName: "max_number_of_messages",
      type: "number",
      format: "int64",
    },
    region: {
      baseName: "region",
      type: "string",
      required: true,
    },
    secretAccessKeyKey: {
      baseName: "secret_access_key_key",
      type: "string",
    },
    tls: {
      baseName: "tls",
      type: "ObservabilityPipelineTls",
    },
    type: {
      baseName: "type",
      type: "ObservabilityPipelineCrowdStrikeFdrSourceType",
      required: true,
    },
    urlKey: {
      baseName: "url_key",
      type: "string",
    },
    visibilityTimeoutSecs: {
      baseName: "visibility_timeout_secs",
      type: "number",
      format: "int64",
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
    return ObservabilityPipelineCrowdStrikeFdrSource.attributeTypeMap;
  }

  public constructor() {}
}
