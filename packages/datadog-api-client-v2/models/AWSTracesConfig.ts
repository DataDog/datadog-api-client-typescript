/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { XRayServicesList } from "./XRayServicesList";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * AWS Traces config
 */
export class AWSTracesConfig {
  /**
   * AWS X-Ray services to collect traces from
   */
  "xrayServices"?: XRayServicesList;

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
    xrayServices: {
      baseName: "xray_services",
      type: "XRayServicesList",
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
    return AWSTracesConfig.attributeTypeMap;
  }

  public constructor() {}
}
