/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { HourlyUsageAttributionBody } from "./HourlyUsageAttributionBody";
import { HourlyUsageAttributionMetadata } from "./HourlyUsageAttributionMetadata";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Response containing the hourly usage attribution by tag(s).
*/
export class HourlyUsageAttributionResponse {
  /**
   * The object containing document metadata.
  */
  "metadata"?: HourlyUsageAttributionMetadata;
  /**
   * Get the hourly usage attribution by tag(s).
  */
  "usage"?: Array<HourlyUsageAttributionBody>;

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
    "metadata": {
      "baseName": "metadata",
      "type": "HourlyUsageAttributionMetadata",
    },
    "usage": {
      "baseName": "usage",
      "type": "Array<HourlyUsageAttributionBody>",
    },
    "additionalProperties": {
      "baseName": "additionalProperties",
      "type": "any",
    }
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {




    return HourlyUsageAttributionResponse.attributeTypeMap;

  }

  public constructor() {











  }
}









