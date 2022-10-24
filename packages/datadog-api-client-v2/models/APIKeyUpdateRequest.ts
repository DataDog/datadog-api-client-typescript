/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { APIKeyUpdateData } from "./APIKeyUpdateData";

import {
  AttributeTypeMap,
  UnparsedObject,
} from "../../datadog-api-client-common/util";

/**
 * Request used to update an API key.
 */
export class APIKeyUpdateRequest {
  /**
   * Object used to update an API key.
   */
  "data": APIKeyUpdateData;

  /**
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      baseName: "data",
      type: "APIKeyUpdateData",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return APIKeyUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
