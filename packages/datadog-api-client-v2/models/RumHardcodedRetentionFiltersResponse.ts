/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RumHardcodedRetentionFilterData } from "./RumHardcodedRetentionFilterData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * All hardcoded retention filters for a RUM application.
 */
export class RumHardcodedRetentionFiltersResponse {
  /**
   * A list of hardcoded retention filters.
   */
  "data"?: Array<RumHardcodedRetentionFilterData>;

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
      type: "Array<RumHardcodedRetentionFilterData>",
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
    return RumHardcodedRetentionFiltersResponse.attributeTypeMap;
  }

  public constructor() {}
}
