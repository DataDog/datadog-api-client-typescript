/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CustomAttributeConfig } from "./CustomAttributeConfig";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response containing a single custom attribute configuration.
 */
export class CustomAttributeConfigResponse {
  /**
   * A custom attribute configuration that defines an organization-specific metadata field on cases. Custom attributes are scoped to a case type and can hold text, URLs, numbers, or predefined select options.
   */
  "data"?: CustomAttributeConfig;

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
    data: {
      baseName: "data",
      type: "CustomAttributeConfig",
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
    return CustomAttributeConfigResponse.attributeTypeMap;
  }

  public constructor() {}
}
