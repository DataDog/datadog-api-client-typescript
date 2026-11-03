/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ExperimentsVariantResultsV2DTODataAttributesMetricsItems } from "./ExperimentsVariantResultsV2DTODataAttributesMetricsItems";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Details of the variant result.
 */
export class ExperimentsVariantResultsV2DTODataAttributes {
  /**
   * Number of subjects assigned to this variant.
   */
  "assignmentCount"?: number;
  /**
   * ID of the experiment associated with this result.
   */
  "experimentId"?: string;
  /**
   * Whether this variant is the experiment's control.
   */
  "isControl"?: boolean;
  /**
   * Metrics reported for this variant.
   */
  "metrics"?: Array<ExperimentsVariantResultsV2DTODataAttributesMetricsItems>;
  /**
   * Key that identifies the experiment variant.
   */
  "variantKey"?: string;
  /**
   * Display name of the experiment variant.
   */
  "variantName"?: string;

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
    assignmentCount: {
      baseName: "assignment_count",
      type: "number",
      format: "int64",
    },
    experimentId: {
      baseName: "experiment_id",
      type: "string",
    },
    isControl: {
      baseName: "is_control",
      type: "boolean",
    },
    metrics: {
      baseName: "metrics",
      type: "Array<ExperimentsVariantResultsV2DTODataAttributesMetricsItems>",
    },
    variantKey: {
      baseName: "variant_key",
      type: "string",
    },
    variantName: {
      baseName: "variant_name",
      type: "string",
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
    return ExperimentsVariantResultsV2DTODataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
