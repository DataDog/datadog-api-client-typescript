/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SamlConfigurationsUpdateAttributes } from "./SamlConfigurationsUpdateAttributes";
import { SamlConfigurationsUpdateRequestDataType } from "./SamlConfigurationsUpdateRequestDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data wrapper for SAML preferences update.
 */
export class SamlConfigurationsUpdateRequestData {
  /**
   * Attributes for updating SAML preferences.
   */
  "attributes": SamlConfigurationsUpdateAttributes;
  /**
   * Type of the resource.
   */
  "type": SamlConfigurationsUpdateRequestDataType;

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
      type: "SamlConfigurationsUpdateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SamlConfigurationsUpdateRequestDataType",
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
    return SamlConfigurationsUpdateRequestData.attributeTypeMap;
  }

  public constructor() {}
}
