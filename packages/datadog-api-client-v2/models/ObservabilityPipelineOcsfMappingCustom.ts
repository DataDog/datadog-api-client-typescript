/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineOcsfMappingCustomFieldMapping } from "./ObservabilityPipelineOcsfMappingCustomFieldMapping";
import { ObservabilityPipelineOcsfMappingCustomMetadata } from "./ObservabilityPipelineOcsfMappingCustomMetadata";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Custom OCSF mapping configuration for transforming logs.
 */
export class ObservabilityPipelineOcsfMappingCustom {
  /**
   * A list of field mapping rules for transforming log fields to OCSF schema fields.
   */
  "mapping": Array<ObservabilityPipelineOcsfMappingCustomFieldMapping>;
  /**
   * Metadata for the custom OCSF mapping.
   */
  "metadata": ObservabilityPipelineOcsfMappingCustomMetadata;
  /**
   * The version of the custom mapping configuration.
   */
  "version": number;

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
    mapping: {
      baseName: "mapping",
      type: "Array<ObservabilityPipelineOcsfMappingCustomFieldMapping>",
      required: true,
    },
    metadata: {
      baseName: "metadata",
      type: "ObservabilityPipelineOcsfMappingCustomMetadata",
      required: true,
    },
    version: {
      baseName: "version",
      type: "number",
      required: true,
      format: "int64",
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
    return ObservabilityPipelineOcsfMappingCustom.attributeTypeMap;
  }

  public constructor() {}
}
