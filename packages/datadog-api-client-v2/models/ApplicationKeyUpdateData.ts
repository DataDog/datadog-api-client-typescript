/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ApplicationKeyUpdateAttributes } from "./ApplicationKeyUpdateAttributes";
import { ApplicationKeysType } from "./ApplicationKeysType";

export class ApplicationKeyUpdateData {
  "attributes": ApplicationKeyUpdateAttributes;
  /**
   * ID of the application key.
   */
  "id": string;
  "type": ApplicationKeysType;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: {
      baseName: string;
      type: string;
      required?: boolean;
      format?: string;
    };
  } = {
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

  static getAttributeTypeMap() {
    return ApplicationKeyUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
