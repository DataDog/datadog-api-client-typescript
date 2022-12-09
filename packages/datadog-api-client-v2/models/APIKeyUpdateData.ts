/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { APIKeysType } from "./APIKeysType";
import { APIKeyUpdateAttributes } from "./APIKeyUpdateAttributes";

import {
  AttributeTypeMap,
  UnparsedObject,
} from "../../datadog-api-client-common/util";

/**
 * Object used to update an API key.
 */
export class APIKeyUpdateData {
  /**
   * Attributes used to update an API Key.
   */
  "attributes": APIKeyUpdateAttributes;
  /**
   * ID of the API key.
   */
  "id": string;
  /**
   * API Keys resource type.
   */
  "type": APIKeysType;

  /**
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      baseName: "attributes",
      type: "APIKeyUpdateAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "APIKeysType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return APIKeyUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
