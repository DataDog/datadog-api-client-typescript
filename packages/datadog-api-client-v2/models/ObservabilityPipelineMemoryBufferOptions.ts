/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineBufferOptionsMemoryType } from "./ObservabilityPipelineBufferOptionsMemoryType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Options for configuring a memory buffer by byte size.
 */
export class ObservabilityPipelineMemoryBufferOptions {
  /**
   * Maximum size of the disk buffer.
   */
  "maxSize"?: number;
  /**
   * The type of the buffer that will be configured, a memory buffer.
   */
  "type"?: ObservabilityPipelineBufferOptionsMemoryType;

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
    maxSize: {
      baseName: "max_size",
      type: "number",
      format: "int64",
    },
    type: {
      baseName: "type",
      type: "ObservabilityPipelineBufferOptionsMemoryType",
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
    return ObservabilityPipelineMemoryBufferOptions.attributeTypeMap;
  }

  public constructor() {}
}
