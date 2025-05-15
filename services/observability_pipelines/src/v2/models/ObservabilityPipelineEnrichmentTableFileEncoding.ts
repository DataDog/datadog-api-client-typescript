import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineEnrichmentTableFileEncodingType } from "./ObservabilityPipelineEnrichmentTableFileEncodingType";

/**
 * File encoding format.
 */
export class ObservabilityPipelineEnrichmentTableFileEncoding {
  /**
   * The `encoding` `delimiter`.
   */
  "delimiter": string;
  /**
   * The `encoding` `includes_headers`.
   */
  "includesHeaders": boolean;
  /**
   * Specifies the encoding format (e.g., CSV) used for enrichment tables.
   */
  "type": ObservabilityPipelineEnrichmentTableFileEncodingType;
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
    delimiter: {
      baseName: "delimiter",
      type: "string",
      required: true,
    },
    includesHeaders: {
      baseName: "includes_headers",
      type: "boolean",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ObservabilityPipelineEnrichmentTableFileEncodingType",
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
    return ObservabilityPipelineEnrichmentTableFileEncoding.attributeTypeMap;
  }

  public constructor() {}
}
