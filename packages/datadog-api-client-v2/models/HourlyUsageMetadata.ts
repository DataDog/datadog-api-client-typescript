/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { HourlyUsagePagination } from "./HourlyUsagePagination";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The object containing document metadata.
 */
export class HourlyUsageMetadata {
  /**
   * The metadata for the current pagination.
   */
  "pagination"?: HourlyUsagePagination;

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
    pagination: {
      baseName: "pagination",
      type: "HourlyUsagePagination",
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
    return HourlyUsageMetadata.attributeTypeMap;
  }

  public constructor() {}
}
