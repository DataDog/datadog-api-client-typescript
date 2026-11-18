/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ProductAnalyticsLaunchEventProperty } from "./ProductAnalyticsLaunchEventProperty";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * An event to instrument for the launch.
 */
export class ProductAnalyticsLaunchEvent {
  /**
   * What the event records.
   */
  "description"?: string;
  /**
   * IDs of the launch KPIs that the event measures.
   */
  "kpis"?: Array<string>;
  /**
   * Name of the event, unique within the tracking plan.
   */
  "name": string;
  /**
   * Properties that the event carries.
   */
  "properties"?: Array<ProductAnalyticsLaunchEventProperty>;
  /**
   * What causes the event to be sent.
   */
  "trigger"?: string;
  /**
   * Views where the event is sent. Each value must be unique and not blank.
   */
  "views"?: Array<string>;

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
    description: {
      baseName: "description",
      type: "string",
    },
    kpis: {
      baseName: "kpis",
      type: "Array<string>",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    properties: {
      baseName: "properties",
      type: "Array<ProductAnalyticsLaunchEventProperty>",
    },
    trigger: {
      baseName: "trigger",
      type: "string",
    },
    views: {
      baseName: "views",
      type: "Array<string>",
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
    return ProductAnalyticsLaunchEvent.attributeTypeMap;
  }

  public constructor() {}
}
