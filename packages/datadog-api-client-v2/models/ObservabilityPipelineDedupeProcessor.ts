/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineDedupeProcessorCache } from "./ObservabilityPipelineDedupeProcessorCache";
import { ObservabilityPipelineDedupeProcessorMode } from "./ObservabilityPipelineDedupeProcessorMode";
import { ObservabilityPipelineDedupeProcessorType } from "./ObservabilityPipelineDedupeProcessorType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The `dedupe` processor removes duplicate fields in log events.
 *
 * **Supported pipeline types:** logs
 */
export class ObservabilityPipelineDedupeProcessor {
  /**
   * Configuration for the cache used to detect duplicates.
   */
  "cache"?: ObservabilityPipelineDedupeProcessorCache;
  /**
   * The display name for a component.
   */
  "displayName"?: string;
  /**
   * Indicates whether the processor is enabled.
   */
  "enabled": boolean;
  /**
   * A list of log field paths to check for duplicates.
   */
  "fields": Array<string>;
  /**
   * The unique identifier for this processor.
   */
  "id": string;
  /**
   * A Datadog search query used to determine which logs this processor targets.
   */
  "include": string;
  /**
   * The deduplication mode to apply to the fields.
   */
  "mode": ObservabilityPipelineDedupeProcessorMode;
  /**
   * The processor type. The value should always be `dedupe`.
   */
  "type": ObservabilityPipelineDedupeProcessorType;

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
    cache: {
      baseName: "cache",
      type: "ObservabilityPipelineDedupeProcessorCache",
    },
    displayName: {
      baseName: "display_name",
      type: "string",
    },
    enabled: {
      baseName: "enabled",
      type: "boolean",
      required: true,
    },
    fields: {
      baseName: "fields",
      type: "Array<string>",
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
    mode: {
      baseName: "mode",
      type: "ObservabilityPipelineDedupeProcessorMode",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ObservabilityPipelineDedupeProcessorType",
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
    return ObservabilityPipelineDedupeProcessor.attributeTypeMap;
  }

  public constructor() {}
}
