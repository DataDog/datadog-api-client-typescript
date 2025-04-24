/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineEnrichmentTableFileKeyItemsComparison } from "./ObservabilityPipelineEnrichmentTableFileKeyItemsComparison";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of `ObservabilityPipelineEnrichmentTableFileKeyItems` object.
 */
export class ObservabilityPipelineEnrichmentTableFileKeyItems {
  /**
   * The `items` `column`.
   */
  "column": string;
  /**
   * The definition of `ObservabilityPipelineEnrichmentTableFileKeyItemsComparison` object.
   */
  "comparison": ObservabilityPipelineEnrichmentTableFileKeyItemsComparison;
  /**
   * The `items` `field`.
   */
  "field": string;

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
    column: {
      baseName: "column",
      type: "string",
      required: true,
    },
    comparison: {
      baseName: "comparison",
      type: "ObservabilityPipelineEnrichmentTableFileKeyItemsComparison",
      required: true,
    },
    field: {
      baseName: "field",
      type: "string",
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
    return ObservabilityPipelineEnrichmentTableFileKeyItems.attributeTypeMap;
  }

  public constructor() {}
}
