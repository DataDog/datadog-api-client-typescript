/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsWarningType } from "./SyntheticsWarningType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object collecting warnings for a given step.
 */
export class SyntheticsStepDetailWarning {
  /**
   * Message for the warning.
   */
  "message": string;
  /**
   * User locator used.
   */
  "type": SyntheticsWarningType;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    message: {
      baseName: "message",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SyntheticsWarningType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SyntheticsStepDetailWarning.attributeTypeMap;
  }

  public constructor() {}
}
