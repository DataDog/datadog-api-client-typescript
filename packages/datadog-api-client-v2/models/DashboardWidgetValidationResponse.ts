/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DashboardWidgetValidationResult } from "./DashboardWidgetValidationResult";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Ordered validation results corresponding to the requested widgets.
 */
export class DashboardWidgetValidationResponse {
  /**
   * Validation results in the same order as the requested widgets.
   */
  "results": Array<DashboardWidgetValidationResult>;

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
    results: {
      baseName: "results",
      type: "Array<DashboardWidgetValidationResult>",
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
    return DashboardWidgetValidationResponse.attributeTypeMap;
  }

  public constructor() {}
}
