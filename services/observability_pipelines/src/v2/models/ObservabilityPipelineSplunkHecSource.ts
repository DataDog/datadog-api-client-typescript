import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineSplunkHecSourceType } from "./ObservabilityPipelineSplunkHecSourceType";
import { ObservabilityPipelineSplunkHecSourceValidToken } from "./ObservabilityPipelineSplunkHecSourceValidToken";
import { ObservabilityPipelineTls } from "./ObservabilityPipelineTls";

/**
 * The `splunk_hec` source implements the Splunk HTTP Event Collector (HEC) API.
 *
 * **Supported pipeline types:** logs
 */
export class ObservabilityPipelineSplunkHecSource {
  /**
   * Name of the environment variable or secret that holds the listen address for the HEC API.
   */
  "addressKey"?: string;
  /**
   * The unique identifier for this component. Used in other parts of the pipeline to reference this component (for example, as the `input` to downstream components).
   */
  "id": string;
  /**
   * When `true`, the Splunk HEC token from the incoming request is stored in the event metadata.
   * This allows downstream components to forward the token to other Splunk HEC destinations.
   */
  "storeHecToken"?: boolean;
  /**
   * Configuration for enabling TLS encryption between the pipeline component and external services.
   */
  "tls"?: ObservabilityPipelineTls;
  /**
   * The source type. Always `splunk_hec`.
   */
  "type": ObservabilityPipelineSplunkHecSourceType;
  /**
   * A list of tokens that are accepted for authenticating incoming HEC requests. When set, the source
   * rejects any request whose HEC token does not match an enabled entry in this list.
   */
  "validTokens"?: Array<ObservabilityPipelineSplunkHecSourceValidToken>;
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
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    storeHecToken: {
      baseName: "store_hec_token",
      type: "boolean",
    },
    tls: {
      baseName: "tls",
      type: "ObservabilityPipelineTls",
    },
    type: {
      baseName: "type",
      type: "ObservabilityPipelineSplunkHecSourceType",
      required: true,
    },
    validTokens: {
      baseName: "valid_tokens",
      type: "Array<ObservabilityPipelineSplunkHecSourceValidToken>",
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
    return ObservabilityPipelineSplunkHecSource.attributeTypeMap;
  }

  public constructor() {}
}
