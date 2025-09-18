import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineGcpAuth } from "./ObservabilityPipelineGcpAuth";
import { ObservabilityPipelineGooglePubSubDestinationEncoding } from "./ObservabilityPipelineGooglePubSubDestinationEncoding";
import { ObservabilityPipelineGooglePubSubDestinationType } from "./ObservabilityPipelineGooglePubSubDestinationType";
import { ObservabilityPipelineTls } from "./ObservabilityPipelineTls";

/**
 * The `google_pubsub` destination publishes logs to a Google Cloud Pub/Sub topic.
 */
export class ObservabilityPipelineGooglePubSubDestination {
  /**
   * GCP credentials used to authenticate with Google Cloud Storage.
   */
  "auth"?: ObservabilityPipelineGcpAuth;
  /**
   * Encoding format for log events.
   */
  "encoding": ObservabilityPipelineGooglePubSubDestinationEncoding;
  /**
   * The unique identifier for this component.
   */
  "id": string;
  /**
   * A list of component IDs whose output is used as the `input` for this component.
   */
  "inputs": Array<string>;
  /**
   * The GCP project ID that owns the Pub/Sub topic.
   */
  "project": string;
  /**
   * Configuration for enabling TLS encryption between the pipeline component and external services.
   */
  "tls"?: ObservabilityPipelineTls;
  /**
   * The Pub/Sub topic name to publish logs to.
   */
  "topic": string;
  /**
   * The destination type. The value should always be `google_pubsub`.
   */
  "type": ObservabilityPipelineGooglePubSubDestinationType;
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
    },
    encoding: {
      baseName: "encoding",
      type: "ObservabilityPipelineGooglePubSubDestinationEncoding",
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
    project: {
      baseName: "project",
      type: "string",
      required: true,
    },
    tls: {
      baseName: "tls",
      type: "ObservabilityPipelineTls",
    },
    topic: {
      baseName: "topic",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ObservabilityPipelineGooglePubSubDestinationType",
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
    return ObservabilityPipelineGooglePubSubDestination.attributeTypeMap;
  }

  public constructor() {}
}
