/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ProductAnalyticsLaunchEventFinding } from "./ProductAnalyticsLaunchEventFinding";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Latest inspection of the repository for the tracking plan instrumentation. A new analysis replaces the stored
 * one.
 * Events and properties that it does not list are not verified.
 */
export class ProductAnalyticsLaunchCodeAnalysis {
  /**
   * Time of the analysis. Set by the server.
   */
  "analyzedAt"?: Date;
  /**
   * Results for the events of the tracking plan. List each event once.
   */
  "events"?: Array<ProductAnalyticsLaunchEventFinding>;
  /**
   * Code revision that was inspected, such as a commit SHA.
   */
  "revision"?: string;

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
    analyzedAt: {
      baseName: "analyzed_at",
      type: "Date",
      format: "date-time",
    },
    events: {
      baseName: "events",
      type: "Array<ProductAnalyticsLaunchEventFinding>",
    },
    revision: {
      baseName: "revision",
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
    return ProductAnalyticsLaunchCodeAnalysis.attributeTypeMap;
  }

  public constructor() {}
}
