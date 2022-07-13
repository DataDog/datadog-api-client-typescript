/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { APIKeyRelationships } from "./APIKeyRelationships";
import { APIKeysType } from "./APIKeysType";
import { PartialAPIKeyAttributes } from "./PartialAPIKeyAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Partial Datadog API key.
 */
export class PartialAPIKey {
  /**
   * Attributes of a partial API key.
   */
  "attributes"?: PartialAPIKeyAttributes;
  /**
   * ID of the API key.
   */
  "id"?: string;
  /**
   * Resources related to the API key.
   */
  "relationships"?: APIKeyRelationships;
  /**
   * API Keys resource type.
   */
  "type"?: APIKeysType;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      baseName: "attributes",
      type: "PartialAPIKeyAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    relationships: {
      baseName: "relationships",
      type: "APIKeyRelationships",
    },
    type: {
      baseName: "type",
      type: "APIKeysType",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return PartialAPIKey.attributeTypeMap;
  }

  public constructor() {}
}
