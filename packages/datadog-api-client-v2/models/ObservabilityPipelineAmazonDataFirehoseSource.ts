/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineAmazonDataFirehoseSourceType } from "./ObservabilityPipelineAmazonDataFirehoseSourceType";
import { ObservabilityPipelineAwsAuth } from "./ObservabilityPipelineAwsAuth";
import { ObservabilityPipelineTls } from "./ObservabilityPipelineTls";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The `amazon_data_firehose` source ingests logs from AWS Data Firehose.
 *
 * **Supported pipeline types:** logs
 */
export class ObservabilityPipelineAmazonDataFirehoseSource {
  /**
   * Name of the environment variable or secret that holds the Firehose delivery stream address.
   */
  "addressKey"?: string;
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
   * Configuration for enabling TLS encryption between the pipeline component and external services.
   */
  "tls"?: ObservabilityPipelineTls;
  /**
   * The source type. The value should always be `amazon_data_firehose`.
   */
  "type": ObservabilityPipelineAmazonDataFirehoseSourceType;

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
    addressKey: {
      baseName: "address_key",
      type: "string",
    },
    auth: {
      baseName: "auth",
      type: "ObservabilityPipelineAwsAuth",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    tls: {
      baseName: "tls",
      type: "ObservabilityPipelineTls",
    },
    type: {
      baseName: "type",
      type: "ObservabilityPipelineAmazonDataFirehoseSourceType",
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
    return ObservabilityPipelineAmazonDataFirehoseSource.attributeTypeMap;
  }

  public constructor() {}
}
