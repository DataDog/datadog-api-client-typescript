/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ProductAnalyticsLaunchDashboardStep } from "./ProductAnalyticsLaunchDashboardStep";
import { ProductAnalyticsLaunchExperimentStep } from "./ProductAnalyticsLaunchExperimentStep";
import { ProductAnalyticsLaunchFunnelStep } from "./ProductAnalyticsLaunchFunnelStep";
import { ProductAnalyticsLaunchTrackingPlan } from "./ProductAnalyticsLaunchTrackingPlan";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Steps of the launch.
 */
export class ProductAnalyticsLaunchSteps {
  /**
   * Dashboard linked to the launch.
   */
  "dashboard"?: ProductAnalyticsLaunchDashboardStep;
  /**
   * Experiment linked to the launch. The draft fields are cleared when `experiment_id` is set.
   */
  "experiment"?: ProductAnalyticsLaunchExperimentStep;
  /**
   * Funnel linked to the launch.
   */
  "funnel"?: ProductAnalyticsLaunchFunnelStep;
  /**
   * Tracking plan of a launch, listing the events and properties to instrument.
   */
  "trackingPlan"?: ProductAnalyticsLaunchTrackingPlan;

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
    dashboard: {
      baseName: "dashboard",
      type: "ProductAnalyticsLaunchDashboardStep",
    },
    experiment: {
      baseName: "experiment",
      type: "ProductAnalyticsLaunchExperimentStep",
    },
    funnel: {
      baseName: "funnel",
      type: "ProductAnalyticsLaunchFunnelStep",
    },
    trackingPlan: {
      baseName: "tracking_plan",
      type: "ProductAnalyticsLaunchTrackingPlan",
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
    return ProductAnalyticsLaunchSteps.attributeTypeMap;
  }

  public constructor() {}
}
