/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ProductAnalyticsMonitorUnlinkAttributes } from "./ProductAnalyticsMonitorUnlinkAttributes";
import { ProductAnalyticsMonitorUnlinkRequestType } from "./ProductAnalyticsMonitorUnlinkRequestType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data of the Product Analytics monitor unlink request.
 */
export class ProductAnalyticsMonitorUnlinkData {
  /**
   * The chart link to remove. It must match the stored link exactly:
   * `chart_id` alone for a saved chart, or `chart_id` and `dashboard_id` for a dashboard widget.
   */
  "attributes": ProductAnalyticsMonitorUnlinkAttributes;
  /**
   * Product Analytics monitor unlink request resource type.
   */
  "type": ProductAnalyticsMonitorUnlinkRequestType;

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
    attributes: {
      baseName: "attributes",
      type: "ProductAnalyticsMonitorUnlinkAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ProductAnalyticsMonitorUnlinkRequestType",
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
    return ProductAnalyticsMonitorUnlinkData.attributeTypeMap;
  }

  public constructor() {}
}
