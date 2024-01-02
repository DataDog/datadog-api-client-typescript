/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AzureUCConfig } from "./AzureUCConfig";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes for Azure config pair.
 */
export class AzureUCConfigPairAttributes {
  /**
   * An Azure config.
   */
  "configs": Array<AzureUCConfig>;
  /**
   * The ID of the Azure config pair.
   */
  "id"?: number;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    configs: {
      baseName: "configs",
      type: "Array<AzureUCConfig>",
      required: true,
    },
    id: {
      baseName: "id",
      type: "number",
      format: "int64",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AzureUCConfigPairAttributes.attributeTypeMap;
  }

  public constructor() {}
}
