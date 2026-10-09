/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SeverityOverrideResponseData } from "./SeverityOverrideResponseData";
import { SeverityOverrideResponseMeta } from "./SeverityOverrideResponseMeta";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response for the severity override request.
 */
export class SeverityOverrideResponse {
  /**
   * Data of the severity override response.
   */
  "data": SeverityOverrideResponseData;
  /**
   * Security findings skipped while processing the severity override request.
   */
  "meta"?: SeverityOverrideResponseMeta;

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
      type: "SeverityOverrideResponseData",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "SeverityOverrideResponseMeta",
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
    return SeverityOverrideResponse.attributeTypeMap;
  }

  public constructor() {}
}
