/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ApplicationKeysType } from "./ApplicationKeysType";
import { ApplicationKeyUpdateAttributes } from "./ApplicationKeyUpdateAttributes";

import { AttributeTypeMap } from "../util";

/**
 * Object used to update an application key.
 */
export class ApplicationKeyUpdateData {
  /**
   * Attributes used to update an application Key.
   */
  "attributes": ApplicationKeyUpdateAttributes;
  /**
   * ID of the application key.
   */
  "id": string;
  /**
   * Application Keys resource type.
   */
  "type": ApplicationKeysType;

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
      type: "ApplicationKeyUpdateAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
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
    return ApplicationKeyUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
