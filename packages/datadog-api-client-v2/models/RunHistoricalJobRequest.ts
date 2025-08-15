/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RunHistoricalJobRequestData } from "./RunHistoricalJobRequestData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Run a historical job request.
 */
export class RunHistoricalJobRequest {
  /**
   * Data for running a historical job request.
   */
  "data"?: RunHistoricalJobRequestData;

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
      type: "RunHistoricalJobRequestData",
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
    return RunHistoricalJobRequest.attributeTypeMap;
  }

  public constructor() {}
}
