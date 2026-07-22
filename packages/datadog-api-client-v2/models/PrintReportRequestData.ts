/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { PrintReportRequestAttributes } from "./PrintReportRequestAttributes";
import { PrintReportType } from "./PrintReportType";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * The JSON:API data object for a print report request.
*/
export class PrintReportRequestData {
  /**
   * The configuration for a print-only report. Specify exactly one of `timeframe` (for a
   * relative time window) or both `from_ts` and `to_ts` (for an absolute time range).
  */
  "attributes": PrintReportRequestAttributes;
  /**
   * JSON:API resource type for a print-only report.
  */
  "type": PrintReportType;

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    "attributes": {
      "baseName": "attributes",
      "type": "PrintReportRequestAttributes",
      "required": true,
    },
    "type": {
      "baseName": "type",
      "type": "PrintReportType",
      "required": true,
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




    return PrintReportRequestData.attributeTypeMap;

  }

  public constructor() {











  }
}









