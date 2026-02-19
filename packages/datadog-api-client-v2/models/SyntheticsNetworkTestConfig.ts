/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsNetworkAssertion } from "./SyntheticsNetworkAssertion";
import { SyntheticsNetworkTestRequest } from "./SyntheticsNetworkTestRequest";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Configuration object for a Network Path test.
 */
export class SyntheticsNetworkTestConfig {
  /**
   * Array of assertions used for the test.
   */
  "assertions"?: Array<SyntheticsNetworkAssertion>;
  /**
   * Object describing the request for a Network Path test.
   */
  "request"?: SyntheticsNetworkTestRequest;

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
    assertions: {
      baseName: "assertions",
      type: "Array<SyntheticsNetworkAssertion>",
    },
    request: {
      baseName: "request",
      type: "SyntheticsNetworkTestRequest",
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
    return SyntheticsNetworkTestConfig.attributeTypeMap;
  }

  public constructor() {}
}
