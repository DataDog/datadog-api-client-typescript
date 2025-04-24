/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineDecoding } from "./ObservabilityPipelineDecoding";
import { ObservabilityPipelineGcpAuth } from "./ObservabilityPipelineGcpAuth";
import { ObservabilityPipelineGooglePubSubSourceType } from "./ObservabilityPipelineGooglePubSubSourceType";
import { ObservabilityPipelineTls } from "./ObservabilityPipelineTls";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The `google_pubsub` source ingests logs from a Google Cloud Pub/Sub subscription.
 */
export class ObservabilityPipelineGooglePubSubSource {
  /**
   * GCP credentials used to authenticate with Google Cloud Storage.
   */
  "auth": ObservabilityPipelineGcpAuth;
  /**
   * The decoding format used to interpret incoming logs.
   */
  "decoding": ObservabilityPipelineDecoding;
  /**
   * The unique identifier for this component. Used to reference this component in other parts of the pipeline (e.g., as input to downstream components).
   */
  "id": string;
  /**
   * The GCP project ID that owns the Pub/Sub subscription.
   */
  "project": string;
  /**
   * The Pub/Sub subscription name from which messages are consumed.
   */
  "subscription": string;
  /**
   * Configuration for enabling TLS encryption.
   */
  "tls"?: ObservabilityPipelineTls;
  /**
   * The source type. The value should always be `google_pubsub`.
   */
  "type": ObservabilityPipelineGooglePubSubSourceType;

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
      type: "ObservabilityPipelineGcpAuth",
      required: true,
    },
    decoding: {
      baseName: "decoding",
      type: "ObservabilityPipelineDecoding",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    project: {
      baseName: "project",
      type: "string",
      required: true,
    },
    subscription: {
      baseName: "subscription",
      type: "string",
      required: true,
    },
    tls: {
      baseName: "tls",
      type: "ObservabilityPipelineTls",
    },
    type: {
      baseName: "type",
      type: "ObservabilityPipelineGooglePubSubSourceType",
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
    return ObservabilityPipelineGooglePubSubSource.attributeTypeMap;
  }

  public constructor() {}
}
