/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsTestResultDeviceBrowser } from "./SyntheticsTestResultDeviceBrowser";
import { SyntheticsTestResultDevicePlatform } from "./SyntheticsTestResultDevicePlatform";
import { SyntheticsTestResultDeviceResolution } from "./SyntheticsTestResultDeviceResolution";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Device information for the test result (browser and mobile tests).
 */
export class SyntheticsTestResultDevice {
  /**
   * Browser information for the device used to run the test.
   */
  "browser"?: SyntheticsTestResultDeviceBrowser;
  /**
   * Device identifier.
   */
  "id"?: string;
  /**
   * Device name.
   */
  "name"?: string;
  /**
   * Platform information for the device used to run the test.
   */
  "platform"?: SyntheticsTestResultDevicePlatform;
  /**
   * Screen resolution of the device used to run the test.
   */
  "resolution"?: SyntheticsTestResultDeviceResolution;
  /**
   * Device type.
   */
  "type"?: string;

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
    browser: {
      baseName: "browser",
      type: "SyntheticsTestResultDeviceBrowser",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    platform: {
      baseName: "platform",
      type: "SyntheticsTestResultDevicePlatform",
    },
    resolution: {
      baseName: "resolution",
      type: "SyntheticsTestResultDeviceResolution",
    },
    type: {
      baseName: "type",
      type: "string",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SyntheticsTestResultDevice.attributeTypeMap;
  }

  public constructor() {}
}
