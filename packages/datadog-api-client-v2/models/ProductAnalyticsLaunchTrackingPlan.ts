/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ProductAnalyticsLaunchCodeAnalysis } from "./ProductAnalyticsLaunchCodeAnalysis";
import { ProductAnalyticsLaunchEvent } from "./ProductAnalyticsLaunchEvent";
import { ProductAnalyticsLaunchProperty } from "./ProductAnalyticsLaunchProperty";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Tracking plan of a launch, listing the events and properties to instrument.
 */
export class ProductAnalyticsLaunchTrackingPlan {
  /**
   * Latest inspection of the repository for the tracking plan instrumentation. A new analysis replaces the stored
   * one.
   * Events and properties that it does not list are not verified.
   */
  "codeAnalysis"?: ProductAnalyticsLaunchCodeAnalysis;
  /**
   * ID of the code generation session that implemented the plan.
   */
  "codegenSessionId"?: string;
  /**
   * Time the tracking plan was created.
   */
  "createdAt": Date;
  /**
   * UUID of the user who created the tracking plan.
   */
  "createdBy": string;
  /**
   * Events to instrument.
   */
  "events"?: Array<ProductAnalyticsLaunchEvent>;
  /**
   * ID of the tracking plan.
   */
  "id": string;
  /**
   * ID of the Jira ticket that tracks the instrumentation work.
   */
  "jiraTicketId"?: string;
  /**
   * Link to the pull request that implements the plan.
   */
  "prLink"?: string;
  /**
   * Event properties of the tracking plan, keyed by property ID.
   */
  "properties"?: { [key: string]: ProductAnalyticsLaunchProperty };
  /**
   * Time the tracking plan was last updated.
   */
  "updatedAt"?: Date;
  /**
   * UUID of the user who last updated the tracking plan.
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
    codeAnalysis: {
      baseName: "code_analysis",
      type: "ProductAnalyticsLaunchCodeAnalysis",
    },
    codegenSessionId: {
      baseName: "codegen_session_id",
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
    events: {
      baseName: "events",
      type: "Array<ProductAnalyticsLaunchEvent>",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    jiraTicketId: {
      baseName: "jira_ticket_id",
      type: "string",
    },
    prLink: {
      baseName: "pr_link",
      type: "string",
    },
    properties: {
      baseName: "properties",
      type: "{ [key: string]: ProductAnalyticsLaunchProperty; }",
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
    return ProductAnalyticsLaunchTrackingPlan.attributeTypeMap;
  }

  public constructor() {}
}
