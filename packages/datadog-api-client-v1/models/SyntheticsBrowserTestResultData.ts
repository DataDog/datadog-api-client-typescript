/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SyntheticsDevice } from "./SyntheticsDevice";
import { SyntheticsStepDetail } from "./SyntheticsStepDetail";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * Object containing results for your Synthetic browser test.
 */

export class SyntheticsBrowserTestResultData {
  /**
   * Type of browser device used for the browser test.
   */
  "browserType"?: string;
  /**
   * Browser version used for the browser test.
   */
  "browserVersion"?: string;
  "device"?: SyntheticsDevice;
  /**
   * Global duration in second of the browser test.
   */
  "duration"?: number;
  /**
   * Error returned for the browser test.
   */
  "error"?: string;
  /**
   * Whether or not the browser test was conducted.
   */
  "passed"?: boolean;
  /**
   * The amount of email received during the browser test.
   */
  "receivedEmailCount"?: number;
  /**
   * Starting URL for the browser test.
   */
  "startUrl"?: string;
  /**
   * Array containing the different browser test steps.
   */
  "stepDetails"?: Array<SyntheticsStepDetail>;
  /**
   * Whether or not a thumbnail is associated with the browser test.
   */
  "thumbnailsBucketKey"?: boolean;
  /**
   * Time in second to wait before the browser test starts after reaching the start URL.
   */
  "timeToInteractive"?: number;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    browserType: {
      baseName: "browserType",
      type: "string",
      format: "",
    },
    browserVersion: {
      baseName: "browserVersion",
      type: "string",
      format: "",
    },
    device: {
      baseName: "device",
      type: "SyntheticsDevice",
      format: "",
    },
    duration: {
      baseName: "duration",
      type: "number",
      format: "double",
    },
    error: {
      baseName: "error",
      type: "string",
      format: "",
    },
    passed: {
      baseName: "passed",
      type: "boolean",
      format: "",
    },
    receivedEmailCount: {
      baseName: "receivedEmailCount",
      type: "number",
      format: "int64",
    },
    startUrl: {
      baseName: "startUrl",
      type: "string",
      format: "",
    },
    stepDetails: {
      baseName: "stepDetails",
      type: "Array<SyntheticsStepDetail>",
      format: "",
    },
    thumbnailsBucketKey: {
      baseName: "thumbnailsBucketKey",
      type: "boolean",
      format: "",
    },
    timeToInteractive: {
      baseName: "timeToInteractive",
      type: "number",
      format: "double",
    },
  };

  static getAttributeTypeMap() {
    return SyntheticsBrowserTestResultData.attributeTypeMap;
  }

  static deserialize(data: {
    [key: string]: any;
  }): SyntheticsBrowserTestResultData {
    const res = new SyntheticsBrowserTestResultData();

    res.browserType = ObjectSerializer.deserialize(
      data.browserType,
      "string",
      ""
    );

    res.browserVersion = ObjectSerializer.deserialize(
      data.browserVersion,
      "string",
      ""
    );

    res.device = ObjectSerializer.deserialize(
      data.device,
      "SyntheticsDevice",
      ""
    );

    res.duration = ObjectSerializer.deserialize(
      data.duration,
      "number",
      "double"
    );

    res.error = ObjectSerializer.deserialize(data.error, "string", "");

    res.passed = ObjectSerializer.deserialize(data.passed, "boolean", "");

    res.receivedEmailCount = ObjectSerializer.deserialize(
      data.receivedEmailCount,
      "number",
      "int64"
    );

    res.startUrl = ObjectSerializer.deserialize(data.startUrl, "string", "");

    res.stepDetails = ObjectSerializer.deserialize(
      data.stepDetails,
      "Array<SyntheticsStepDetail>",
      ""
    );

    res.thumbnailsBucketKey = ObjectSerializer.deserialize(
      data.thumbnailsBucketKey,
      "boolean",
      ""
    );

    res.timeToInteractive = ObjectSerializer.deserialize(
      data.timeToInteractive,
      "number",
      "double"
    );

    return res;
  }

  static serialize(
    data: SyntheticsBrowserTestResultData
  ): { [key: string]: any } {
    const attributeTypes = SyntheticsBrowserTestResultData.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    res.browserType = ObjectSerializer.serialize(
      data.browserType,
      "string",
      ""
    );

    res.browserVersion = ObjectSerializer.serialize(
      data.browserVersion,
      "string",
      ""
    );

    res.device = ObjectSerializer.serialize(
      data.device,
      "SyntheticsDevice",
      ""
    );

    res.duration = ObjectSerializer.serialize(
      data.duration,
      "number",
      "double"
    );

    res.error = ObjectSerializer.serialize(data.error, "string", "");

    res.passed = ObjectSerializer.serialize(data.passed, "boolean", "");

    res.receivedEmailCount = ObjectSerializer.serialize(
      data.receivedEmailCount,
      "number",
      "int64"
    );

    res.startUrl = ObjectSerializer.serialize(data.startUrl, "string", "");

    res.stepDetails = ObjectSerializer.serialize(
      data.stepDetails,
      "Array<SyntheticsStepDetail>",
      ""
    );

    res.thumbnailsBucketKey = ObjectSerializer.serialize(
      data.thumbnailsBucketKey,
      "boolean",
      ""
    );

    res.timeToInteractive = ObjectSerializer.serialize(
      data.timeToInteractive,
      "number",
      "double"
    );

    return res;
  }

  public constructor() {}
}
