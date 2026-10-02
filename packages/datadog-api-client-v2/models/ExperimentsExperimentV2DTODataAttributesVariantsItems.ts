/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Variant in an experiment, with its identity and traffic allocation.
 */
export class ExperimentsExperimentV2DTODataAttributesVariantsItems {
  /**
   * Backing feature flag variant ID. Present for Datadog feature flag experiments and omitted for Warehouse experiments.
   */
  "featureFlagVariantId"?: string;
  /**
   * Whether this variant participates in the experiment.
   */
  "isActive": boolean;
  /**
   * Whether this is the single control variant.
   */
  "isControl": boolean;
  /**
   * Value recorded in exposure data for this variant.
   */
  "key": string;
  /**
   * Display name of the experiment variant.
   */
  "name"?: string;
  /**
   * Traffic allocation percentage.
   */
  "weight": number;

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
    featureFlagVariantId: {
      baseName: "feature_flag_variant_id",
      type: "string",
    },
    isActive: {
      baseName: "is_active",
      type: "boolean",
      required: true,
    },
    isControl: {
      baseName: "is_control",
      type: "boolean",
      required: true,
    },
    key: {
      baseName: "key",
      type: "string",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
    },
    weight: {
      baseName: "weight",
      type: "number",
      required: true,
      format: "double",
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
    return ExperimentsExperimentV2DTODataAttributesVariantsItems.attributeTypeMap;
  }

  public constructor() {}
}
