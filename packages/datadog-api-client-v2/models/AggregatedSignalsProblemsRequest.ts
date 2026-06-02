/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AggregatedSignalsProblemsRequestData } from "./AggregatedSignalsProblemsRequestData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Request body for the aggregated signals and problems endpoint.
 */
export class AggregatedSignalsProblemsRequest {
  /**
   * Data envelope for an aggregated signals and problems request.
   */
  "data": AggregatedSignalsProblemsRequestData;

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
      type: "AggregatedSignalsProblemsRequestData",
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
    return AggregatedSignalsProblemsRequest.attributeTypeMap;
  }

  public constructor() {}
}
