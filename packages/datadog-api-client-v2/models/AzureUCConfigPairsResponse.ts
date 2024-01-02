/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AzureUCConfigPair } from "./AzureUCConfigPair";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response of Azure config pair.
 */
export class AzureUCConfigPairsResponse {
  /**
   * Azure config pair.
   */
  "data"?: AzureUCConfigPair;

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
      type: "AzureUCConfigPair",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AzureUCConfigPairsResponse.attributeTypeMap;
  }

  public constructor() {}
}
