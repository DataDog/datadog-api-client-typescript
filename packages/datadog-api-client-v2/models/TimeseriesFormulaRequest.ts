/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TimeseriesFormulaRequestAttributes } from "./TimeseriesFormulaRequestAttributes";
import { TimeseriesFormulaRequestType } from "./TimeseriesFormulaRequestType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A single timeseries query to be executed.
 */
export class TimeseriesFormulaRequest {
  /**
   * The object describing a timeseries formula request.
   */
  "attributes": TimeseriesFormulaRequestAttributes;
  /**
   * The type of the resource. The value should always be timeseries_request.
   */
  "type": TimeseriesFormulaRequestType;

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
    attributes: {
      baseName: "attributes",
      type: "TimeseriesFormulaRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "TimeseriesFormulaRequestType",
      required: true,
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
    return TimeseriesFormulaRequest.attributeTypeMap;
  }

  public constructor() {}
}
