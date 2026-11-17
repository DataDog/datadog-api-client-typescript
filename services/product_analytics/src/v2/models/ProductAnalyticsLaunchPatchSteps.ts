import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsLaunchDashboardStep } from "./ProductAnalyticsLaunchDashboardStep";
import { ProductAnalyticsLaunchExperimentStep } from "./ProductAnalyticsLaunchExperimentStep";
import { ProductAnalyticsLaunchFunnelStep } from "./ProductAnalyticsLaunchFunnelStep";
import { ProductAnalyticsLaunchTrackingPlanRequest } from "./ProductAnalyticsLaunchTrackingPlanRequest";

/**
 * Steps to update. Steps that are not set are left unchanged.
 * A `tracking_plan` replaces the whole stored tracking plan, so include every event and property to keep.
 */
export class ProductAnalyticsLaunchPatchSteps {
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
  "trackingPlan"?: ProductAnalyticsLaunchTrackingPlanRequest;
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
      type: "ProductAnalyticsLaunchTrackingPlanRequest",
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
    return ProductAnalyticsLaunchPatchSteps.attributeTypeMap;
  }

  public constructor() {}
}
