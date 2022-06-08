/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsDeviceID } from "./SyntheticsDeviceID";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Information about a single test run.
 */
export class SyntheticsTriggerCITestRunResult {
  /**
   * The device ID.
   */
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

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    device: {
      baseName: "device",
      type: "SyntheticsDeviceID",
    },
    location: {
      baseName: "location",
      type: "number",
      format: "int64",
    },
    publicId: {
      baseName: "public_id",
      type: "string",
    },
    resultId: {
      baseName: "result_id",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SyntheticsTriggerCITestRunResult.attributeTypeMap;
  }

  public constructor() {}
}
