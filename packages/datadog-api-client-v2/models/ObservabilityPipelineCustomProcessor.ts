/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineCustomProcessorRemap } from "./ObservabilityPipelineCustomProcessorRemap";
import { ObservabilityPipelineCustomProcessorType } from "./ObservabilityPipelineCustomProcessorType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The `custom_processor` processor transforms events using [Vector Remap Language (VRL)](https://vector.dev/docs/reference/vrl/) scripts with advanced filtering capabilities.
 */
export class ObservabilityPipelineCustomProcessor {
  /**
   * Whether this processor is enabled.
   */
  "enabled": boolean;
  /**
   * The unique identifier for this processor.
   */
  "id": string;
  /**
   * A Datadog search query used to determine which logs this processor targets. This field should always be set to `*` for the custom_processor processor.
   */
  "include": string;
  /**
   * Array of VRL remap rules.
   */
  "remaps": Array<ObservabilityPipelineCustomProcessorRemap>;
  /**
   * The processor type. The value should always be `custom_processor`.
   */
  "type": ObservabilityPipelineCustomProcessorType;

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
    remaps: {
      baseName: "remaps",
      type: "Array<ObservabilityPipelineCustomProcessorRemap>",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ObservabilityPipelineCustomProcessorType",
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
    return ObservabilityPipelineCustomProcessor.attributeTypeMap;
  }

  public constructor() {}
}
