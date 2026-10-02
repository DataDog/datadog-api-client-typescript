import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Variant selected for an experiment, with its identity and traffic allocation.
 */
export class ExperimentsCreateExperimentV2RequestDataAttributesVariantsItems {
  /**
   * Stable backing flag variant ID. Required for Datadog-backed experiments and omitted for Warehouse-only experiments.
   */
  "featureFlagVariantId"?: string;
  /**
   * Whether this variant participates in the experiment. Responses always include this field. On writes an included variant defaults to active; omit its row to remove or unselect it. Explicit false supports sending an unchanged response back.
   */
  "isActive"?: boolean;
  /**
   * Whether this is the single control variant.
   */
  "isControl": boolean;
  /**
   * Assignment value. Datadog flag variant keys are server-owned.
   */
  "key": string;
  /**
   * Display name. Datadog flag variant names are server-owned.
   */
  "name"?: string;
  /**
   * Traffic allocation percentage. Existing variant weights cannot change through the public API after the experiment starts.
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
      format: "uuid",
    },
    isActive: {
      baseName: "is_active",
      type: "boolean",
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
    return ExperimentsCreateExperimentV2RequestDataAttributesVariantsItems.attributeTypeMap;
  }

  public constructor() {}
}
