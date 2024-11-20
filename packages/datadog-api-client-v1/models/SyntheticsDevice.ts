/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object describing the device used to perform the Synthetic test.
 */
export class SyntheticsDevice {
  /**
   * Screen height of the device.
   */
  "height": number;
  /**
   * The device ID.
   */
  "id": string;
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
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

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
      type: "string",
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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
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
