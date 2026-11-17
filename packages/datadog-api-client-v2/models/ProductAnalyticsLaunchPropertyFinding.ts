/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ProductAnalyticsLaunchCodeStatus } from "./ProductAnalyticsLaunchCodeStatus";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Code analysis result for a property of an event.
 */
export class ProductAnalyticsLaunchPropertyFinding {
  /**
   * ID of the property in the tracking plan.
   */
  "id": string;
  /**
   * Whether the inspected code sends the event, or attaches the property to the event.
   */
  "status": ProductAnalyticsLaunchCodeStatus;

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
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    status: {
      baseName: "status",
      type: "ProductAnalyticsLaunchCodeStatus",
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
    return ProductAnalyticsLaunchPropertyFinding.attributeTypeMap;
  }

  public constructor() {}
}
