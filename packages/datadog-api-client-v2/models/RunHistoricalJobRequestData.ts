/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RunHistoricalJobRequestAttributes } from "./RunHistoricalJobRequestAttributes";
import { RunHistoricalJobRequestDataType } from "./RunHistoricalJobRequestDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data for running a historical job request.
 */
export class RunHistoricalJobRequestData {
  /**
   * Run a historical job request.
   */
  "attributes"?: RunHistoricalJobRequestAttributes;
  /**
   * Type of data.
   */
  "type"?: RunHistoricalJobRequestDataType;

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
      type: "RunHistoricalJobRequestAttributes",
    },
    type: {
      baseName: "type",
      type: "RunHistoricalJobRequestDataType",
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
    return RunHistoricalJobRequestData.attributeTypeMap;
  }

  public constructor() {}
}
