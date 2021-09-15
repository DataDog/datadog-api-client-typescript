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
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * Information about a single test run.
 */

export class SyntheticsTriggerCITestRunResult {
  "device"?: SyntheticsDeviceID;
  /**
   * The location ID of the test run.
   */
  "location"?: number;
  /**
   * The public ID of the Synthetics test.
   */
  "publicId"?: string;
  /**
   * ID of the result.
   */
  "resultId"?: string;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    device: {
      baseName: "device",
      type: "SyntheticsDeviceID",
      format: "",
    },
    location: {
      baseName: "location",
      type: "number",
      format: "int64",
    },
    publicId: {
      baseName: "public_id",
      type: "string",
      format: "",
    },
    resultId: {
      baseName: "result_id",
      type: "string",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return SyntheticsTriggerCITestRunResult.attributeTypeMap;
  }

  static deserialize(data: {
    [key: string]: any;
  }): SyntheticsTriggerCITestRunResult {
    const res = new SyntheticsTriggerCITestRunResult();

    if (
      [
        "laptop_large",
        "tablet",
        "mobile_small",
        "chrome.laptop_large",
        "chrome.tablet",
        "chrome.mobile_small",
        "firefox.laptop_large",
        "firefox.tablet",
        "firefox.mobile_small",
        "edge.laptop_large",
        "edge.tablet",
        "edge.mobile_small",
        undefined,
      ].includes(data.device)
    ) {
      res.device = data.device;
    } else {
      const raw = new SyntheticsTriggerCITestRunResult();
      raw.unparsedObject = data;
      return raw;
    }

    res.location = ObjectSerializer.deserialize(
      data.location,
      "number",
      "int64"
    );

    res.publicId = ObjectSerializer.deserialize(data.public_id, "string", "");

    res.resultId = ObjectSerializer.deserialize(data.result_id, "string", "");

    return res;
  }

  static serialize(data: SyntheticsTriggerCITestRunResult): {
    [key: string]: any;
  } {
    const attributeTypes =
      SyntheticsTriggerCITestRunResult.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    if (
      [
        "laptop_large",
        "tablet",
        "mobile_small",
        "chrome.laptop_large",
        "chrome.tablet",
        "chrome.mobile_small",
        "firefox.laptop_large",
        "firefox.tablet",
        "firefox.mobile_small",
        "edge.laptop_large",
        "edge.tablet",
        "edge.mobile_small",
        undefined,
      ].includes(data.device)
    ) {
      res.device = data.device;
    } else {
      throw TypeError(`invalid enum value ${data.device} for device`);
    }

    res.location = ObjectSerializer.serialize(data.location, "number", "int64");

    res.public_id = ObjectSerializer.serialize(data.publicId, "string", "");

    res.result_id = ObjectSerializer.serialize(data.resultId, "string", "");

    return res;
  }

  public constructor() {}
}
