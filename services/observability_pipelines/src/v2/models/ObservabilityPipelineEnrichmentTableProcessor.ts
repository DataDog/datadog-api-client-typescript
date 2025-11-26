import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineEnrichmentTableFile } from "./ObservabilityPipelineEnrichmentTableFile";
import { ObservabilityPipelineEnrichmentTableGeoIp } from "./ObservabilityPipelineEnrichmentTableGeoIp";
import { ObservabilityPipelineEnrichmentTableProcessorType } from "./ObservabilityPipelineEnrichmentTableProcessorType";

/**
 * The `enrichment_table` processor enriches logs using a static CSV file or GeoIP database.
 */
export class ObservabilityPipelineEnrichmentTableProcessor {
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
