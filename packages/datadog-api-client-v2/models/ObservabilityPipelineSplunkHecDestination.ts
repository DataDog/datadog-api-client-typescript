/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineSplunkHecDestinationEncoding } from "./ObservabilityPipelineSplunkHecDestinationEncoding";
import { ObservabilityPipelineSplunkHecDestinationType } from "./ObservabilityPipelineSplunkHecDestinationType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The `splunk_hec` destination forwards logs to Splunk using the HTTP Event Collector (HEC).
 */
export class ObservabilityPipelineSplunkHecDestination {
  /**
   * If `true`, Splunk tries to extract timestamps from incoming log events.
   * If `false`, Splunk assigns the time the event was received.
   */
  "autoExtractTimestamp"?: boolean;
  /**
   * Encoding format for log events.
   */
  "encoding"?: ObservabilityPipelineSplunkHecDestinationEncoding;
  /**
   * The unique identifier for this component. Used to reference this component in other parts of the pipeline (e.g., as input to downstream components).
   */
  "id": string;
  /**
   * Optional name of the Splunk index where logs are written.
   */
  "index"?: string;
  /**
   * A list of component IDs whose output is used as the `input` for this component.
   */
  "inputs": Array<string>;
  /**
   * The Splunk sourcetype to assign to log events.
   */
  "sourcetype"?: string;
  /**
   * The destination type. Always `splunk_hec`.
   */
  "type": ObservabilityPipelineSplunkHecDestinationType;

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
    autoExtractTimestamp: {
      baseName: "auto_extract_timestamp",
      type: "boolean",
    },
    encoding: {
      baseName: "encoding",
      type: "ObservabilityPipelineSplunkHecDestinationEncoding",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    index: {
      baseName: "index",
      type: "string",
    },
    inputs: {
      baseName: "inputs",
      type: "Array<string>",
      required: true,
    },
    sourcetype: {
      baseName: "sourcetype",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "ObservabilityPipelineSplunkHecDestinationType",
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
    return ObservabilityPipelineSplunkHecDestination.attributeTypeMap;
  }

  public constructor() {}
}
