import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineGcpAuth } from "./ObservabilityPipelineGcpAuth";
import { ObservabilityPipelineGoogleChronicleDestinationEncoding } from "./ObservabilityPipelineGoogleChronicleDestinationEncoding";
import { ObservabilityPipelineGoogleChronicleDestinationType } from "./ObservabilityPipelineGoogleChronicleDestinationType";

/**
 * The `google_chronicle` destination sends logs to Google Chronicle.
 *
 * **Supported pipeline types:** logs
 */
export class ObservabilityPipelineGoogleChronicleDestination {
  /**
   * GCP credentials used to authenticate with Google Cloud Storage.
   */
  "auth"?: ObservabilityPipelineGcpAuth;
  /**
   * The Google Chronicle customer ID.
   */
  "customerId": string;
  /**
   * The encoding format for the logs sent to Chronicle.
   */
  "encoding"?: ObservabilityPipelineGoogleChronicleDestinationEncoding;
  /**
   * The unique identifier for this component.
   */
  "id": string;
  /**
   * A list of component IDs whose output is used as the `input` for this component.
   */
  "inputs": Array<string>;
  /**
   * The log type metadata associated with the Chronicle destination.
   */
  "logType"?: string;
  /**
   * The destination type. The value should always be `google_chronicle`.
   */
  "type": ObservabilityPipelineGoogleChronicleDestinationType;
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
    customerId: {
      baseName: "customer_id",
      type: "string",
      required: true,
    },
    encoding: {
      baseName: "encoding",
      type: "ObservabilityPipelineGoogleChronicleDestinationEncoding",
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
    logType: {
      baseName: "log_type",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "ObservabilityPipelineGoogleChronicleDestinationType",
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
    return ObservabilityPipelineGoogleChronicleDestination.attributeTypeMap;
  }

  public constructor() {}
}
