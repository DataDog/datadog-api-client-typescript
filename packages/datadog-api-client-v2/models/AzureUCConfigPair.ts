/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AzureUCConfigPairAttributes } from "./AzureUCConfigPairAttributes";
import { AzureUCConfigPairType } from "./AzureUCConfigPairType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Azure config pair.
 */
export class AzureUCConfigPair {
  /**
   * Attributes for Azure config pair.
   */
  "attributes": AzureUCConfigPairAttributes;
  /**
   * The ID of Cloud Cost Management account.
   */
  "id"?: number;
  /**
   * Type of Azure config pair.
   */
  "type": AzureUCConfigPairType;

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
      type: "AzureUCConfigPairAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "number",
      format: "int64",
    },
    type: {
      baseName: "type",
      type: "AzureUCConfigPairType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AzureUCConfigPair.attributeTypeMap;
  }

  public constructor() {}
}
