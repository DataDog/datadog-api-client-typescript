/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FastlyServiceData } from "./FastlyServiceData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The expected response schema when getting a Fastly service.
 */
export class FastlyServiceResponse {
  /**
   * Data object for Fastly service requests.
   */
  "data"?: FastlyServiceData;

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
      type: "FastlyServiceData",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return FastlyServiceResponse.attributeTypeMap;
  }

  public constructor() {}
}
