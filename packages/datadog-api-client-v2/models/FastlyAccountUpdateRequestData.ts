/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FastlyAccountType } from "./FastlyAccountType";
import { FastlyAccountUpdateRequestAttributes } from "./FastlyAccountUpdateRequestAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data object for updating a Fastly account.
 */
export class FastlyAccountUpdateRequestData {
  /**
   * Attributes object for updating a Fastly account.
   */
  "attributes"?: FastlyAccountUpdateRequestAttributes;
  /**
   * The JSON:API type for this API. Should always be `fastly-accounts`.
   */
  "type"?: FastlyAccountType;

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
      type: "FastlyAccountUpdateRequestAttributes",
    },
    type: {
      baseName: "type",
      type: "FastlyAccountType",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return FastlyAccountUpdateRequestData.attributeTypeMap;
  }

  public constructor() {}
}
