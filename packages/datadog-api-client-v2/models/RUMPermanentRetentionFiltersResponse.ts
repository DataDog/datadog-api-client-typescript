/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RUMPermanentRetentionFilterData } from "./RUMPermanentRetentionFilterData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * All permanent RUM retention filters for a RUM application.
 */
export class RUMPermanentRetentionFiltersResponse {
  /**
   * A list of permanent RUM retention filters.
   */
  "data"?: Array<RUMPermanentRetentionFilterData>;

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
      type: "Array<RUMPermanentRetentionFilterData>",
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
    return RUMPermanentRetentionFiltersResponse.attributeTypeMap;
  }

  public constructor() {}
}
