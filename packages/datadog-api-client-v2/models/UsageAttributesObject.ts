/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { HourlyUsageType } from "./HourlyUsageType";
import { UsageTimeSeriesObject } from "./UsageTimeSeriesObject";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Usage attributes data.
*/
export class UsageAttributesObject {
  /**
   * The organization name.
  */
  "orgName"?: string;
  /**
   * The product for which usage is being reported.
  */
  "productFamily"?: string;
  /**
   * The organization public ID.
  */
  "publicId"?: string;
  /**
   * The region of the Datadog instance that the organization belongs to.
  */
  "region"?: string;
  /**
   * List of usage data reported for each requested hour.
  */
  "timeseries"?: Array<UsageTimeSeriesObject>;
  /**
   * Usage type that is being measured.
  */
  "usageType"?: HourlyUsageType;

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
    "orgName": {
      "baseName": "org_name",
      "type": "string",
    },
    "productFamily": {
      "baseName": "product_family",
      "type": "string",
    },
    "publicId": {
      "baseName": "public_id",
      "type": "string",
    },
    "region": {
      "baseName": "region",
      "type": "string",
    },
    "timeseries": {
      "baseName": "timeseries",
      "type": "Array<UsageTimeSeriesObject>",
    },
    "usageType": {
      "baseName": "usage_type",
      "type": "HourlyUsageType",
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




    return UsageAttributesObject.attributeTypeMap;

  }

  public constructor() {











  }
}









