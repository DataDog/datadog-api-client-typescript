/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AWSCcmConfig } from "./AWSCcmConfig";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * AWS CCM Config attributes for Create/Update requests.
 */
export class AWSCcmConfigRequestAttributes {
  /**
   * AWS Cloud Cost Management config.
   */
  "ccmConfig": AWSCcmConfig;

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
    ccmConfig: {
      baseName: "ccm_config",
      type: "AWSCcmConfig",
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
    return AWSCcmConfigRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
