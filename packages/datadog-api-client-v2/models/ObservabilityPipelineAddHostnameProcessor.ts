/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineAddHostnameProcessorType } from "./ObservabilityPipelineAddHostnameProcessorType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The `add_hostname` processor adds the hostname to log events.
 */
export class ObservabilityPipelineAddHostnameProcessor {
  /**
   * The display name for a component.
   */
  "displayName"?: string;
  /**
   * Whether this processor is enabled.
   */
  "enabled": boolean;
  /**
   * The unique identifier for this component. Used to reference this component in other parts of the pipeline (for example, as the `input` to downstream components).
   */
  "id": string;
  /**
   * A Datadog search query used to determine which logs this processor targets.
   */
  "include": string;
  /**
   * The processor type. The value should always be `add_hostname`.
   */
  "type": ObservabilityPipelineAddHostnameProcessorType;

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
    displayName: {
      baseName: "display_name",
      type: "string",
    },
    enabled: {
      baseName: "enabled",
      type: "boolean",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    include: {
      baseName: "include",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ObservabilityPipelineAddHostnameProcessorType",
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
    return ObservabilityPipelineAddHostnameProcessor.attributeTypeMap;
  }

  public constructor() {}
}
