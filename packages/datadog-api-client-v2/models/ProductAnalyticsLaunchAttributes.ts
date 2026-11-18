/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ProductAnalyticsLaunchKPI } from "./ProductAnalyticsLaunchKPI";
import { ProductAnalyticsLaunchPhase } from "./ProductAnalyticsLaunchPhase";
import { ProductAnalyticsLaunchSteps } from "./ProductAnalyticsLaunchSteps";

import { AttributeTypeMap, Int64 } from "../../datadog-api-client-common/util";

/**
 * Attributes of a launch.
 */
export class ProductAnalyticsLaunchAttributes {
  /**
   * UUID of the RUM application that the launch belongs to.
   */
  "applicationId"?: string;
  /**
   * Context of the feature being launched.
   */
  "context"?: string;
  /**
   * Time the launch was created.
   */
  "createdAt": Date;
  /**
   * UUID of the user who created the launch.
   */
  "createdBy": string;
  /**
   * Description of the feature being launched.
   */
  "description"?: string;
  /**
   * UUID of the Datadog feature flag that gates the launch.
   */
  "featureFlagId"?: string;
  /**
   * Key of a feature flag managed outside Datadog.
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
   * ID of the organization that owns the launch.
   */
  "orgId": Int64;
  /**
   * Lifecycle phase of a launch. A new launch starts in `plan` or `setup`, and defaults to `plan`.
   * Allowed changes: `plan` to `setup`, `setup` to `ready`, `ready` to `setup` or `launched`, and `launched` to
   * `ready`.
   */
  "phase": ProductAnalyticsLaunchPhase;
  /**
   * ID of the code repository that implements the feature.
   */
  "repositoryId"?: string;
  /**
   * Steps of the launch.
   */
  "steps": ProductAnalyticsLaunchSteps;
  /**
   * Time the launch was last updated.
   */
  "updatedAt"?: Date;
  /**
   * UUID of the user who last updated the launch.
   */
  "updatedBy"?: string;

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
    },
    createdAt: {
      baseName: "created_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    createdBy: {
      baseName: "created_by",
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
    orgId: {
      baseName: "org_id",
      type: "number",
      required: true,
      format: "int64",
    },
    phase: {
      baseName: "phase",
      type: "ProductAnalyticsLaunchPhase",
      required: true,
    },
    repositoryId: {
      baseName: "repository_id",
      type: "string",
    },
    steps: {
      baseName: "steps",
      type: "ProductAnalyticsLaunchSteps",
      required: true,
    },
    updatedAt: {
      baseName: "updated_at",
      type: "Date",
      format: "date-time",
    },
    updatedBy: {
      baseName: "updated_by",
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
    return ProductAnalyticsLaunchAttributes.attributeTypeMap;
  }

  public constructor() {}
}
