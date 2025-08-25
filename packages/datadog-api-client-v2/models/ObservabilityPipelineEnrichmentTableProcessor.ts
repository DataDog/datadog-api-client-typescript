/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineEnrichmentTableFile } from "./ObservabilityPipelineEnrichmentTableFile";
import { ObservabilityPipelineEnrichmentTableGeoIp } from "./ObservabilityPipelineEnrichmentTableGeoIp";
import { ObservabilityPipelineEnrichmentTableProcessorType } from "./ObservabilityPipelineEnrichmentTableProcessorType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The `enrichment_table` processor enriches logs using a static CSV file or GeoIP database.
 */
export class ObservabilityPipelineEnrichmentTableProcessor {
  /**
   * Defines a static enrichment table loaded from a CSV file.
   */
  "file"?: ObservabilityPipelineEnrichmentTableFile;
  /**
   * Uses a GeoIP database to enrich logs based on an IP field.
   */
  "geoip"?: ObservabilityPipelineEnrichmentTableGeoIp;
  /**
   * The unique identifier for this processor.
   */
  "id": string;
  /**
   * A Datadog search query used to determine which logs this processor targets.
   */
  "include": string;
  /**
   * A list of component IDs whose output is used as the input for this processor.
   */
  "inputs": Array<string>;
  /**
   * Path where enrichment results should be stored in the log.
   */
  "target": string;
  /**
   * The processor type. The value should always be `enrichment_table`.
   */
  "type": ObservabilityPipelineEnrichmentTableProcessorType;

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
    file: {
      baseName: "file",
      type: "ObservabilityPipelineEnrichmentTableFile",
    },
    geoip: {
      baseName: "geoip",
      type: "ObservabilityPipelineEnrichmentTableGeoIp",
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
    inputs: {
      baseName: "inputs",
      type: "Array<string>",
      required: true,
    },
    target: {
      baseName: "target",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ObservabilityPipelineEnrichmentTableProcessorType",
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
    return ObservabilityPipelineEnrichmentTableProcessor.attributeTypeMap;
  }

  public constructor() {}
}
