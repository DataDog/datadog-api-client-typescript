/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ApplicationKeyRelationships } from "./ApplicationKeyRelationships";
import { ApplicationKeysType } from "./ApplicationKeysType";
import { PartialApplicationKeyAttributes } from "./PartialApplicationKeyAttributes";

import {
  AttributeTypeMap,
  UnparsedObject,
} from "../../datadog-api-client-common/util";

/**
 * Partial Datadog application key.
 */
export class PartialApplicationKey {
  /**
   * Attributes of a partial application key.
   */
  "attributes"?: PartialApplicationKeyAttributes;
  /**
   * ID of the application key.
   */
  "id"?: string;
  /**
   * Resources related to the application key.
   */
  "relationships"?: ApplicationKeyRelationships;
  /**
   * Application Keys resource type.
   */
  "type"?: ApplicationKeysType;

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
      type: "PartialApplicationKeyAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    relationships: {
      baseName: "relationships",
      type: "ApplicationKeyRelationships",
    },
    type: {
      baseName: "type",
      type: "ApplicationKeysType",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return PartialApplicationKey.attributeTypeMap;
  }

  public constructor() {}
}
