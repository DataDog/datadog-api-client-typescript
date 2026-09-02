import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateFeatureFlagStalenessStatus } from "./CreateFeatureFlagStalenessStatus";
import { CreateVariant } from "./CreateVariant";
import { FeatureFlagDistributionChannel } from "./FeatureFlagDistributionChannel";
import { ValueType } from "./ValueType";

/**
 * Attributes for creating a new feature flag.
 */
export class CreateFeatureFlagAttributes {
  /**
   * The key of the default variant.
   */
  "defaultVariantKey"?: string;
  /**
   * The description of the feature flag.
   */
  "description"?: string;
  /**
   * The distribution channel for the feature flag.
   */
  "distributionChannel"?: FeatureFlagDistributionChannel;
  /**
   * JSON schema for validation when value_type is JSON.
   */
  "jsonSchema"?: string;
  /**
   * The unique key of the feature flag.
   */
  "key": string;
  /**
   * The name of the feature flag.
   */
  "name": string;
  /**
   * Indicates whether this feature flag requires approval for changes.
   */
  "requireApproval"?: boolean;
  /**
   * The staleness status for the feature flag at creation.
   */
  "stalenessStatus"?: CreateFeatureFlagStalenessStatus;
  /**
   * Tags associated with the feature flag.
   */
  "tags"?: Array<string>;
  /**
   * The type of values for the feature flag variants.
   */
  "valueType": ValueType;
  /**
   * The variants of the feature flag.
   */
  "variants": Array<CreateVariant>;
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
    defaultVariantKey: {
      baseName: "default_variant_key",
      type: "string",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    distributionChannel: {
      baseName: "distribution_channel",
      type: "FeatureFlagDistributionChannel",
    },
    jsonSchema: {
      baseName: "json_schema",
      type: "string",
    },
    key: {
      baseName: "key",
      type: "string",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    requireApproval: {
      baseName: "require_approval",
      type: "boolean",
    },
    stalenessStatus: {
      baseName: "staleness_status",
      type: "CreateFeatureFlagStalenessStatus",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
    },
    valueType: {
      baseName: "value_type",
      type: "ValueType",
      required: true,
    },
    variants: {
      baseName: "variants",
      type: "Array<CreateVariant>",
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
    return CreateFeatureFlagAttributes.attributeTypeMap;
  }

  public constructor() {}
}
