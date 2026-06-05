/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AWSCcmConfigValidationRequestAttributes } from "./AWSCcmConfigValidationRequestAttributes";
import { AWSCcmConfigValidationType } from "./AWSCcmConfigValidationType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * AWS CCM config validation request data.
 */
export class AWSCcmConfigValidationRequestData {
  /**
   * Attributes for an AWS CCM config validation request.
   */
  "attributes": AWSCcmConfigValidationRequestAttributes;
  /**
   * AWS CCM config validation resource type.
   */
  "type": AWSCcmConfigValidationType;

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
    attributes: {
      baseName: "attributes",
      type: "AWSCcmConfigValidationRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "AWSCcmConfigValidationType",
      required: true,
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
    return AWSCcmConfigValidationRequestData.attributeTypeMap;
  }

  public constructor() {}
}
