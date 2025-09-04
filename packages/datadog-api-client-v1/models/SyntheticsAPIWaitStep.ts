/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsAPIWaitStepSubtype } from "./SyntheticsAPIWaitStepSubtype";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The Wait step used in a Synthetic multi-step API test.
 */
export class SyntheticsAPIWaitStep {
  /**
   * ID of the step.
   */
  "id"?: string;
  /**
   * The name of the step.
   */
  "name": string;
  /**
   * The subtype of the Synthetic multi-step API wait step.
   */
  "subtype": SyntheticsAPIWaitStepSubtype;
  /**
   * The time to wait in seconds. Minimum value: 0. Maximum value: 180.
   */
  "value": number;

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
    id: {
      baseName: "id",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    subtype: {
      baseName: "subtype",
      type: "SyntheticsAPIWaitStepSubtype",
      required: true,
    },
    value: {
      baseName: "value",
      type: "number",
      required: true,
      format: "int32",
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
    return SyntheticsAPIWaitStep.attributeTypeMap;
  }

  public constructor() {}
}
