/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RumPermanentRetentionFilterData } from "./RumPermanentRetentionFilterData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A permanent RUM retention filter object.
 */
export class RumPermanentRetentionFilterResponse {
  /**
   * A permanent RUM retention filter.
   */
  "data"?: RumPermanentRetentionFilterData;

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
      type: "RumPermanentRetentionFilterData",
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
    return RumPermanentRetentionFilterResponse.attributeTypeMap;
  }

  public constructor() {}
}
