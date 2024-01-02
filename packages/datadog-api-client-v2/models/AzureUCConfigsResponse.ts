/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AzureUCConfigPair } from "./AzureUCConfigPair";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * List of Azure accounts with configs.
 */
export class AzureUCConfigsResponse {
  /**
   * An Azure config pair.
   */
  "data"?: Array<AzureUCConfigPair>;

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
      type: "Array<AzureUCConfigPair>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AzureUCConfigsResponse.attributeTypeMap;
  }

  public constructor() {}
}
