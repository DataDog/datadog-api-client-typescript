/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MicrosoftSentinelDestinationType } from "./MicrosoftSentinelDestinationType";
import { ObservabilityPipelineBufferOptions } from "./ObservabilityPipelineBufferOptions";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The `microsoft_sentinel` destination forwards logs to Microsoft Sentinel.
 *
 * **Supported pipeline types:** logs
 */
export class MicrosoftSentinelDestination {
  /**
   * Configuration for buffer settings on destination components.
   */
  "buffer"?: ObservabilityPipelineBufferOptions;
  /**
   * Azure AD client ID used for authentication.
   */
  "clientId": string;
  /**
   * Name of the environment variable or secret that holds the Azure AD client secret.
   */
  "clientSecretKey"?: string;
  /**
   * Name of the environment variable or secret that holds the Data Collection Endpoint (DCE) URI.
   */
  "dceUriKey"?: string;
  /**
   * The immutable ID of the Data Collection Rule (DCR).
   */
  "dcrImmutableId": string;
  /**
   * The unique identifier for this component.
   */
  "id": string;
  /**
   * A list of component IDs whose output is used as the `input` for this component.
   */
  "inputs": Array<string>;
  /**
   * The name of the Log Analytics table where logs are sent.
   */
  "table": string;
  /**
   * Azure AD tenant ID.
   */
  "tenantId": string;
  /**
   * The destination type. The value should always be `microsoft_sentinel`.
   */
  "type": MicrosoftSentinelDestinationType;

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
    buffer: {
      baseName: "buffer",
      type: "ObservabilityPipelineBufferOptions",
    },
    clientId: {
      baseName: "client_id",
      type: "string",
      required: true,
    },
    clientSecretKey: {
      baseName: "client_secret_key",
      type: "string",
    },
    dceUriKey: {
      baseName: "dce_uri_key",
      type: "string",
    },
    dcrImmutableId: {
      baseName: "dcr_immutable_id",
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
    table: {
      baseName: "table",
      type: "string",
      required: true,
    },
    tenantId: {
      baseName: "tenant_id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "MicrosoftSentinelDestinationType",
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
    return MicrosoftSentinelDestination.attributeTypeMap;
  }

  public constructor() {}
}
