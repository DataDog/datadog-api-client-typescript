import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsLaunchDashboardStep } from "./ProductAnalyticsLaunchDashboardStep";
import { ProductAnalyticsLaunchExperimentStep } from "./ProductAnalyticsLaunchExperimentStep";
import { ProductAnalyticsLaunchFunnelStep } from "./ProductAnalyticsLaunchFunnelStep";
import { ProductAnalyticsLaunchTrackingPlanRequest } from "./ProductAnalyticsLaunchTrackingPlanRequest";

/**
 * Steps of the launch. The tracking plan is required.
 */
export class ProductAnalyticsLaunchStepsRequest {
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
  "trackingPlan": ProductAnalyticsLaunchTrackingPlanRequest;
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
    return ProductAnalyticsLaunchStepsRequest.attributeTypeMap;
  }

  public constructor() {}
}
