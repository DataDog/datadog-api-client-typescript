/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ApplicationKeyCreateAttributes } from "./ApplicationKeyCreateAttributes";
import { ApplicationKeysType } from "./ApplicationKeysType";

import {
  AttributeTypeMap,
  UnparsedObject,
} from "../../datadog-api-client-common/util";

/**
 * Object used to create an application key.
 */
export class ApplicationKeyCreateData {
  /**
   * Attributes used to create an application Key.
   */
  "attributes": ApplicationKeyCreateAttributes;
  /**
   * Application Keys resource type.
   */
  "type": ApplicationKeysType;

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
      type: "ApplicationKeyCreateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ApplicationKeysType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ApplicationKeyCreateData.attributeTypeMap;
  }

  public constructor() {}
}
