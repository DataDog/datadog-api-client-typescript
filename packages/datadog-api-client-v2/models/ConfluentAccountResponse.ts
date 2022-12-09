/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ConfluentAccountResponseData } from "./ConfluentAccountResponseData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The expected response schema when getting a Confluent account.
 */
export class ConfluentAccountResponse {
  /**
   * An API key and API secret pair that represents a Confluent account.
   */
  "data"?: ConfluentAccountResponseData;

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
      type: "ConfluentAccountResponseData",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ConfluentAccountResponse.attributeTypeMap;
  }

  public constructor() {}
}
