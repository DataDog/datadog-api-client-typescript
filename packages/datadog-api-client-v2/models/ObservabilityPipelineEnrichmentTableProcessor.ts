/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineEnrichmentTableFile } from "./ObservabilityPipelineEnrichmentTableFile";
import { ObservabilityPipelineEnrichmentTableGeoIp } from "./ObservabilityPipelineEnrichmentTableGeoIp";
import { ObservabilityPipelineEnrichmentTableProcessorType } from "./ObservabilityPipelineEnrichmentTableProcessorType";
import { ObservabilityPipelineEnrichmentTableReferenceTable } from "./ObservabilityPipelineEnrichmentTableReferenceTable";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The `enrichment_table` processor enriches logs using a static CSV file, GeoIP database, or reference table. Exactly one of `file`, `geoip`, or `reference_table` must be configured.
 *
 * **Supported pipeline types:** logs
 */
export class ObservabilityPipelineEnrichmentTableProcessor {
  /**
   * The display name for a component.
   */
  "displayName"?: string;
  /**
   * Whether this processor is enabled.
   */
  "enabled": boolean;
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
   * Uses a Datadog reference table to enrich logs.
   */
  "referenceTable"?: ObservabilityPipelineEnrichmentTableReferenceTable;
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
    displayName: {
      baseName: "display_name",
      type: "string",
    },
    enabled: {
      baseName: "enabled",
      type: "boolean",
      required: true,
    },
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
    referenceTable: {
      baseName: "reference_table",
      type: "ObservabilityPipelineEnrichmentTableReferenceTable",
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
      type: "{ [key: string]: any; }",
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
