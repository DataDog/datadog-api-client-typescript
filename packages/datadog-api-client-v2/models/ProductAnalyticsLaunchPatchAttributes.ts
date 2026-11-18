/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ProductAnalyticsLaunchCodeAnalysis } from "./ProductAnalyticsLaunchCodeAnalysis";
import { ProductAnalyticsLaunchKPI } from "./ProductAnalyticsLaunchKPI";
import { ProductAnalyticsLaunchPatchSteps } from "./ProductAnalyticsLaunchPatchSteps";
import { ProductAnalyticsLaunchPhase } from "./ProductAnalyticsLaunchPhase";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes to update on a launch. Fields that are not set are left unchanged, and `null` clears a nullable
 * field.
 * Setting a non-empty `feature_flag_id` clears the stored `feature_flag_key` when `feature_flag_key` is not set.
 */
export class ProductAnalyticsLaunchPatchAttributes {
  /**
   * UUID of the RUM application that the launch belongs to.
   */
  "applicationId"?: string;
  /**
   * Latest inspection of the repository for the tracking plan instrumentation. A new analysis replaces the stored
   * one.
   * Events and properties that it does not list are not verified.
   */
  "codeAnalysis"?: ProductAnalyticsLaunchCodeAnalysis;
  /**
   * Context of the feature being launched.
   */
  "context"?: string;
  /**
   * Description of the feature being launched.
   */
  "description"?: string;
  /**
   * UUID of the Datadog feature flag that gates the launch.
   */
  "featureFlagId"?: string;
  /**
   * Key of a feature flag managed outside Datadog. At most 256 characters, with no leading or trailing spaces.
   */
  "featureFlagKey"?: string;
  /**
   * KPIs that the launch is meant to move. Replaces the stored list, and `null` clears it.
   */
  "kpis"?: Array<ProductAnalyticsLaunchKPI>;
  /**
   * Name of the launch.
   */
  "name"?: string;
  /**
   * Lifecycle phase of a launch. A new launch starts in `plan` or `setup`, and defaults to `plan`.
   * Allowed changes: `plan` to `setup`, `setup` to `ready`, `ready` to `setup` or `launched`, and `launched` to
   * `ready`.
   */
  "phase"?: ProductAnalyticsLaunchPhase;
  /**
   * ID of the code repository that implements the feature.
   */
  "repositoryId"?: string;
  /**
   * Steps to update. Steps that are not set are left unchanged.
   * A `tracking_plan` replaces the whole stored tracking plan, so include every event and property to keep.
   */
  "steps"?: ProductAnalyticsLaunchPatchSteps;

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
    applicationId: {
      baseName: "application_id",
      type: "string",
    },
    codeAnalysis: {
      baseName: "code_analysis",
      type: "ProductAnalyticsLaunchCodeAnalysis",
    },
    context: {
      baseName: "context",
      type: "string",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    featureFlagId: {
      baseName: "feature_flag_id",
      type: "string",
    },
    featureFlagKey: {
      baseName: "feature_flag_key",
      type: "string",
    },
    kpis: {
      baseName: "kpis",
      type: "Array<ProductAnalyticsLaunchKPI>",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    phase: {
      baseName: "phase",
      type: "ProductAnalyticsLaunchPhase",
    },
    repositoryId: {
      baseName: "repository_id",
      type: "string",
    },
    steps: {
      baseName: "steps",
      type: "ProductAnalyticsLaunchPatchSteps",
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
    return ProductAnalyticsLaunchPatchAttributes.attributeTypeMap;
  }

  public constructor() {}
}
