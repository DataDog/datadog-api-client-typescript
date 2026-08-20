/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ProductAnalyticsJourneyNodeTargetType } from "./ProductAnalyticsJourneyNodeTargetType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A reference to a single step of the journey.
 */
export class ProductAnalyticsJourneyNodeTarget {
  /**
   * The discriminator identifying a target that references a single step.
   */
  "type": ProductAnalyticsJourneyNodeTargetType;
  /**
   * Alias of the targeted node.
   */
  "value": string;

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
    type: {
      baseName: "type",
      type: "ProductAnalyticsJourneyNodeTargetType",
      required: true,
    },
    value: {
      baseName: "value",
      type: "string",
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
    return ProductAnalyticsJourneyNodeTarget.attributeTypeMap;
  }

  public constructor() {}
}
