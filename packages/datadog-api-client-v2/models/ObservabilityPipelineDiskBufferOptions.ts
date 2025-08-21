/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineBufferOptionsDiskType } from "./ObservabilityPipelineBufferOptionsDiskType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Options for configuring a disk buffer.
 */
export class ObservabilityPipelineDiskBufferOptions {
  /**
   * Maximum size of the disk buffer.
   */
  "maxSize"?: number;
  /**
   * Specifies the buffer type to configure. This option supports only a disk buffer.
   */
  "type"?: ObservabilityPipelineBufferOptionsDiskType;

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
      type: "ObservabilityPipelineBufferOptionsDiskType",
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
    return ObservabilityPipelineDiskBufferOptions.attributeTypeMap;
  }

  public constructor() {}
}
