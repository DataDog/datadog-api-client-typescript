/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SyntheticsDeviceID } from "./SyntheticsDeviceID";
import { AttributeTypeMap } from "../util";

/**
 * Object describing the device used to perform the Synthetic test.
 */

export class SyntheticsDevice {
  /**
   * Screen height of the device.
   */
  "height": number;
  "id": SyntheticsDeviceID;
  /**
   * Whether or not the device is a mobile.
   */
  "isMobile"?: boolean;
  /**
   * The device name.
   */
  "name": string;
  /**
   * Screen width of the device.
   */
  "width": number;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    height: {
      baseName: "height",
      type: "number",
      required: true,
      format: "int64",
    },
    id: {
      baseName: "id",
      type: "SyntheticsDeviceID",
      required: true,
    },
    isMobile: {
      baseName: "isMobile",
      type: "boolean",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    width: {
      baseName: "width",
      type: "number",
      required: true,
      format: "int64",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SyntheticsDevice.attributeTypeMap;
  }

  public constructor() {}
}
