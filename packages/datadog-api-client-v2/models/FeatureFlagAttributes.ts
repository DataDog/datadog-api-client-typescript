/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FeatureFlagEnvironment } from "./FeatureFlagEnvironment";
import { ValueType } from "./ValueType";
import { Variant } from "./Variant";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of a feature flag.
 */
export class FeatureFlagAttributes {
  /**
   * The timestamp when the feature flag was archived.
   */
  "archivedAt"?: Date;
  /**
   * The timestamp when the feature flag was created.
   */
  "createdAt"?: Date;
  /**
   * The ID of the user who created the feature flag.
   */
  "createdBy"?: string;
  /**
   * The description of the feature flag.
   */
  "description": string;
  /**
   * Distribution channel for the feature flag.
   */
  "distributionChannel"?: string;
  /**
   * Environment-specific settings for the feature flag.
   */
  "featureFlagEnvironments"?: Array<FeatureFlagEnvironment>;
  /**
   * JSON schema for validation when value_type is JSON.
   */
  "jsonSchema"?: string;
  /**
   * The unique key of the feature flag.
   */
  "key": string;
  /**
   * The ID of the user who last updated the feature flag.
   */
  "lastUpdatedBy"?: string;
  /**
   * The name of the feature flag.
   */
  "name": string;
  /**
   * Indicates whether this feature flag requires approval for changes.
   */
  "requireApproval"?: boolean;
  /**
   * The timestamp when the feature flag was last updated.
   */
  "updatedAt"?: Date;
  /**
   * The type of values for the feature flag variants.
   */
  "valueType": ValueType;
  /**
   * The variants of the feature flag.
   */
  "variants": Array<Variant>;

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
    archivedAt: {
      baseName: "archived_at",
      type: "Date",
      format: "date-time",
    },
    createdAt: {
      baseName: "created_at",
      type: "Date",
      format: "date-time",
    },
    createdBy: {
      baseName: "created_by",
      type: "string",
      format: "uuid",
    },
    description: {
      baseName: "description",
      type: "string",
      required: true,
    },
    distributionChannel: {
      baseName: "distribution_channel",
      type: "string",
    },
    featureFlagEnvironments: {
      baseName: "feature_flag_environments",
      type: "Array<FeatureFlagEnvironment>",
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
    lastUpdatedBy: {
      baseName: "last_updated_by",
      type: "string",
      format: "uuid",
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
    updatedAt: {
      baseName: "updated_at",
      type: "Date",
      format: "date-time",
    },
    valueType: {
      baseName: "value_type",
      type: "ValueType",
      required: true,
    },
    variants: {
      baseName: "variants",
      type: "Array<Variant>",
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
    return FeatureFlagAttributes.attributeTypeMap;
  }

  public constructor() {}
}
