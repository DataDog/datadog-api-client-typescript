/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MonthlyUsageAttributionBody } from "./MonthlyUsageAttributionBody";
import { MonthlyUsageAttributionMetadata } from "./MonthlyUsageAttributionMetadata";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response containing the monthly Usage Summary by tag(s).
 */
export class MonthlyUsageAttributionResponse {
  /**
   * The object containing document metadata.
   */
  "metadata"?: MonthlyUsageAttributionMetadata;
  /**
   * Get usage summary by tag(s).
   */
  "usage"?: Array<MonthlyUsageAttributionBody>;

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
    metadata: {
      baseName: "metadata",
      type: "MonthlyUsageAttributionMetadata",
    },
    usage: {
      baseName: "usage",
      type: "Array<MonthlyUsageAttributionBody>",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MonthlyUsageAttributionResponse.attributeTypeMap;
  }

  public constructor() {}
}
