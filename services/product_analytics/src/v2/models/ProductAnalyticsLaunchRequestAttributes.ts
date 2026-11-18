import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsLaunchKPI } from "./ProductAnalyticsLaunchKPI";
import { ProductAnalyticsLaunchPhase } from "./ProductAnalyticsLaunchPhase";
import { ProductAnalyticsLaunchStepsRequest } from "./ProductAnalyticsLaunchStepsRequest";

/**
 * Attributes of a launch to create or replace.
 */
export class ProductAnalyticsLaunchRequestAttributes {
  /**
   * UUID of the RUM application that the launch belongs to.
   */
  "applicationId"?: string;
  /**
   * Context of the feature being launched, used to build the tracking plan.
   */
  "context": string;
  /**
   * Description of the feature being launched.
   */
  "description"?: string;
  /**
   * UUID of the Datadog feature flag that gates the launch. Do not set it together with `feature_flag_key`.
   */
  "featureFlagId"?: string;
  /**
   * Key of a feature flag managed outside Datadog, as evaluated in code. At most 256 characters, with no
   * leading or trailing spaces. Do not set it together with `feature_flag_id`. `null` clears it. On replace,
   * omitting it keeps the stored key unless `feature_flag_id` is set.
   */
  "featureFlagKey"?: string;
  /**
   * KPIs that the launch is meant to move.
   */
  "kpis"?: Array<ProductAnalyticsLaunchKPI>;
  /**
   * Name of the launch.
   */
  "name": string;
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
   * Steps of the launch. The tracking plan is required.
   */
  "steps": ProductAnalyticsLaunchStepsRequest;
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
    context: {
      baseName: "context",
      type: "string",
      required: true,
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
      required: true,
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
      type: "ProductAnalyticsLaunchStepsRequest",
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
    return ProductAnalyticsLaunchRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
