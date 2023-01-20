/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FastlyAccountCreateRequestData } from "./FastlyAccountCreateRequestData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Payload schema when adding a Fastly account.
 */
export class FastlyAccountCreateRequest {
  /**
   * Data object for creating a Fastly account.
   */
  "data": FastlyAccountCreateRequestData;

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
      type: "FastlyAccountCreateRequestData",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return FastlyAccountCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
