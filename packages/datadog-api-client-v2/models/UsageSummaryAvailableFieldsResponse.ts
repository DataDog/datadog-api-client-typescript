/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UsageSummaryAvailableFieldsBody } from "./UsageSummaryAvailableFieldsBody";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response listing every field name returned by `GET /api/v1/usage/summary`
 * at each of its three response levels. Includes both typed fields and untyped
 * `additionalProperties` keys.
 */
export class UsageSummaryAvailableFieldsResponse {
  /**
   * Available-fields data.
   */
  "data"?: UsageSummaryAvailableFieldsBody;

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
    data: {
      baseName: "data",
      type: "UsageSummaryAvailableFieldsBody",
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
    return UsageSummaryAvailableFieldsResponse.attributeTypeMap;
  }

  public constructor() {}
}
