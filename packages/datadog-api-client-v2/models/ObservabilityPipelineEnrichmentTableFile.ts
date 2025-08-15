/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineEnrichmentTableFileEncoding } from "./ObservabilityPipelineEnrichmentTableFileEncoding";
import { ObservabilityPipelineEnrichmentTableFileKeyItems } from "./ObservabilityPipelineEnrichmentTableFileKeyItems";
import { ObservabilityPipelineEnrichmentTableFileSchemaItems } from "./ObservabilityPipelineEnrichmentTableFileSchemaItems";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Defines a static enrichment table loaded from a CSV file.
 */
export class ObservabilityPipelineEnrichmentTableFile {
  /**
   * File encoding format.
   */
  "encoding": ObservabilityPipelineEnrichmentTableFileEncoding;
  /**
   * Key fields used to look up enrichment values.
   */
  "key": Array<ObservabilityPipelineEnrichmentTableFileKeyItems>;
  /**
   * Path to the CSV file.
   */
  "path": string;
  /**
   * Schema defining column names and their types.
   */
  "schema": Array<ObservabilityPipelineEnrichmentTableFileSchemaItems>;

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
    encoding: {
      baseName: "encoding",
      type: "ObservabilityPipelineEnrichmentTableFileEncoding",
      required: true,
    },
    key: {
      baseName: "key",
      type: "Array<ObservabilityPipelineEnrichmentTableFileKeyItems>",
      required: true,
    },
    path: {
      baseName: "path",
      type: "string",
      required: true,
    },
    schema: {
      baseName: "schema",
      type: "Array<ObservabilityPipelineEnrichmentTableFileSchemaItems>",
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
    return ObservabilityPipelineEnrichmentTableFile.attributeTypeMap;
  }

  public constructor() {}
}
