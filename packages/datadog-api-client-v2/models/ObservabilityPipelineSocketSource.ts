/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineSocketSourceFraming } from "./ObservabilityPipelineSocketSourceFraming";
import { ObservabilityPipelineSocketSourceMode } from "./ObservabilityPipelineSocketSourceMode";
import { ObservabilityPipelineSocketSourceType } from "./ObservabilityPipelineSocketSourceType";
import { ObservabilityPipelineTls } from "./ObservabilityPipelineTls";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The `socket` source ingests logs over TCP or UDP.
 */
export class ObservabilityPipelineSocketSource {
  /**
   * Framing method configuration for the socket source.
   */
  "framing": ObservabilityPipelineSocketSourceFraming;
  /**
   * The unique identifier for this component. Used to reference this component in other parts of the pipeline (e.g., as input to downstream components).
   */
  "id": string;
  /**
   * Protocol used to receive logs.
   */
  "mode": ObservabilityPipelineSocketSourceMode;
  /**
   * Configuration for enabling TLS encryption between the pipeline component and external services.
   */
  "tls"?: ObservabilityPipelineTls;
  /**
   * The source type. The value should always be `socket`.
   */
  "type": ObservabilityPipelineSocketSourceType;

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
    framing: {
      baseName: "framing",
      type: "ObservabilityPipelineSocketSourceFraming",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    mode: {
      baseName: "mode",
      type: "ObservabilityPipelineSocketSourceMode",
      required: true,
    },
    tls: {
      baseName: "tls",
      type: "ObservabilityPipelineTls",
    },
    type: {
      baseName: "type",
      type: "ObservabilityPipelineSocketSourceType",
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
    return ObservabilityPipelineSocketSource.attributeTypeMap;
  }

  public constructor() {}
}
