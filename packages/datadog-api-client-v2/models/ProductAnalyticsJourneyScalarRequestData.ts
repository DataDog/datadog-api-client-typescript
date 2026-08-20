/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ProductAnalyticsFormulaJourneyRequestType } from "./ProductAnalyticsFormulaJourneyRequestType";
import { ProductAnalyticsJourneyScalarRequestAttributes } from "./ProductAnalyticsJourneyScalarRequestAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The single JSON:API resource carrying a journey scalar query. Its attributes hold the time
 * window and the journey metric to reduce to one value over that window.
 */
export class ProductAnalyticsJourneyScalarRequestData {
  /**
   * Attributes of a journey scalar request.
   */
  "attributes": ProductAnalyticsJourneyScalarRequestAttributes;
  /**
   * The resource type identifier for a journey timeseries or scalar request.
   */
  "type": ProductAnalyticsFormulaJourneyRequestType;

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
      type: "ProductAnalyticsJourneyScalarRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ProductAnalyticsFormulaJourneyRequestType",
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
    return ProductAnalyticsJourneyScalarRequestData.attributeTypeMap;
  }

  public constructor() {}
}
