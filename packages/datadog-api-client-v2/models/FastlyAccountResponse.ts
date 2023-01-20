/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FastlyAccountResponseData } from "./FastlyAccountResponseData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The expected response schema when getting a Fastly account.
 */
export class FastlyAccountResponse {
  /**
   * Data object of a Fastly account.
   */
  "data"?: FastlyAccountResponseData;

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
      type: "FastlyAccountResponseData",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return FastlyAccountResponse.attributeTypeMap;
  }

  public constructor() {}
}
