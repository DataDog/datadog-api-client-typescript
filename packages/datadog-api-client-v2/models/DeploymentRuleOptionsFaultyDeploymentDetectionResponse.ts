/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Faulty deployment detection options returned in deployment rule responses. The `excluded_resources` field is always present, which allows disambiguating this type from monitor options when both share a `duration` field.
 */
export class DeploymentRuleOptionsFaultyDeploymentDetectionResponse {
  /**
   * The duration for faulty deployment detection.
   */
  "duration"?: number;
  /**
   * Resources to exclude from faulty deployment detection.
   */
  "excludedResources": Array<string>;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    duration: {
      baseName: "duration",
      type: "number",
      format: "int64",
    },
    excludedResources: {
      baseName: "excluded_resources",
      type: "Array<string>",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DeploymentRuleOptionsFaultyDeploymentDetectionResponse.attributeTypeMap;
  }

  public constructor() {}
}
